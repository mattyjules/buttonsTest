import os, re, math
from sqlalchemy.sql import func
from flask import Flask, redirect,url_for, render_template, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from statistics import mean
import string

basedir = os.path.abspath(os.path.dirname(__file__))
app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'scenario.db')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
db = SQLAlchemy(app)



class Store_scenario_data(db.Model):
    __tablename__ = 'scenario_data'
    id = db.Column('id', db.Integer, primary_key = True)
    PID = db.Column('PID', db.String(5))
    timestamp = db.Column('timestamp', db.DateTime)
    scenario = db.Column('scenario', db.Integer)
    scenarioScore = db.Column('scenarioScore', db.Integer)
    scenarioNonScore = db.Column('scenarioNonScore', db.Integer)
    scenarioTimeTaken = db.Column('scenarioTimeTaken', db.Float)
    scenarioClosedPopupTimes = db.Column('ScenarioClosedPopupTimes', db.Integer)
    checkBoxInitialArray = db.Column('CheckBoxInitialArray', db.String)
    checkRadioInitialArray = db.Column('CheckRadioInitialArray', db.String)
    stringInitialArray = db.Column('StringInitialArray', db.String)
    checkBoxFinalArray = db.Column('CheckBoxFinalArray', db.String)
    checkRadioFinalArray = db.Column('CheckRadioFinalArray', db.String)
    stringFinalArray = db.Column('StringFinalArray', db.String)
    scenarioInitialScore = db.Column('scenarioInitialScore', db.Integer)
    scenarioInitialNonScore = db.Column('scenarioInitialNonScore', db.Integer)
    scenarioTotalClicks = db.Column('scenarioTotalClicks', db.Integer)


    def __init__(self, scenario, scenarioScore, scenarioNonScore, scenarioTimeTaken, scenarioClosedPopupTimes, checkBoxInitialArray, checkRadioInitialArray, stringInitialArray, checkBoxFinalArray, checkRadioFinalArray, stringFinalArray, scenarioInitialScore, scenarioInitialNonScore, scenarioTotalClicks, pid):
        self.PID = pid
        self.scenario = scenario
        self.scenarioScore = scenarioScore
        self.scenarioNonScore = scenarioNonScore
        self.scenarioTimeTaken = scenarioTimeTaken
        self.scenarioClosedPopupTimes = scenarioClosedPopupTimes
        self.checkBoxInitialArray = checkBoxInitialArray
        self.checkRadioInitialArray = checkRadioInitialArray
        self.stringInitialArray = stringInitialArray
        self.checkBoxFinalArray = checkBoxFinalArray
        self.checkRadioFinalArray = checkRadioFinalArray
        self.stringFinalArray = stringFinalArray
        self.scenarioInitialScore = scenarioInitialScore
        self.scenarioInitialNonScore = scenarioInitialNonScore
        self.scenarioTotalClicks = scenarioTotalClicks
        self.timestamp = datetime.now()

class Store_User_Feedback(db.Model):
    __tablename__='feedback_data'
    id = db.Column('id', db.Integer, primary_key=True)
    PID = db.Column('PID', db.String(5))
    feedbackComment = db.Column('FeedbackComment', db.String)

    def __init__(self, feedbackComment, pid):
        self.PID = pid
        self.feedbackComment = feedbackComment

@app.route('/')
def welcome():
    session['user_data'] = dict()
    if not os.path.exists(os.path.join(basedir, 'scenario.db')):
        db.create_all()
    getPID()
    return render_template('landing.html')

@app.route('/scenarios')
def scenarios():
    return render_template('scenarios.html')

@app.route('/process_feedback', methods=['POST', 'GET'])
def process_feedback():
    if request.method == "POST":
        feedback_data = request.get_json()
        print(feedback_data)
        db.session.add(Store_User_Feedback(feedback_data[0]['FeedbackComment'],session['user_data']['PID']))
        db.session.commit()
    results = {'processed': 'true'}
    return jsonify(results)

@app.route('/process_scenario', methods=['POST', 'GET'])
def process_scenario():
    if request.method == "POST":
        scenario_data = request.get_json()
        db.session.add(Store_scenario_data(

            scenario_data[0]['Scenario'],
            scenario_data[1]['ScenarioScore'],
            scenario_data[2]['ScenarioNonScore'],
            scenario_data[3]['ScenarioTimeTaken'],
            scenario_data[4]['ScenarioClosedPopupTimes'],
            scenario_data[5]['CheckBoxInitialArray'],
            scenario_data[6]['CheckRadioInitialArray'],
            scenario_data[7]['StringInitialArray'],
            scenario_data[8]['CheckBoxFinalArray'],
            scenario_data[9]['CheckRadioFinalArray'],
            scenario_data[10]['StringFinalArray'],
            scenario_data[11]['ScenarioInitialScore'],
            scenario_data[12]['ScenarioInitialNonScore'],
            scenario_data[13]['ScenarioTotalClicks'],
            session['user_data']['PID']))
        db.session.commit()
    results = {'processed': 'true'}
    return jsonify(results)

@app.route('/thanks_incomplete')
def thanks_incomplete():
    return render_template('thanks_incomplete.html')

@app.route('/thanks_completed', methods=['POST', 'GET'])
def thanks_completed():
    pid_list = []
    completed_pid_list = []
    odd_list = []
    even_list = []
    result = db.session.query(Store_scenario_data).all()

    for i in range(0, len(result)):
        if result[i].PID not in pid_list:
            pid_list.append(result[i].PID)

    for i in range(0, len(pid_list)):
        count = 0
        for j in range(0, len(result)):
            if int(pid_list[i]) == int(result[j].PID):
                count += 1

        if count == 20:
            completed_pid_list.append(pid_list[i])
    numReq = 5 - len(completed_pid_list)
    averageFilled = {}

    for i in range(0, len(completed_pid_list)):
        for j in range(0, len(result)):
            if int(completed_pid_list[i]) == int(result[j].PID):
                if (int(result[j].scenario) % 2) == 0:
                    even_list.append(float(result[j].scenarioTimeTaken))
                else:
                    odd_list.append(float(result[j].scenarioTimeTaken))
    averageFilled.update({'nonFillMean': round(mean(even_list),2), 'preFillMean': round(mean(odd_list), 2)})
    meanDifference = averageFilled['nonFillMean'] - averageFilled['preFillMean']
    sqthenrtMeanDifference = math.sqrt(meanDifference**2)

    if meanDifference > 0:
        resultMessage = 'The mean time taken to complete scenarios with pre-filled fields took less time to complete, then unfilled, by ' + str(round(sqthenrtMeanDifference, 3)) + ' seconds'
    else:
        resultMessage = 'The mean time taken to complete scenarios with no filled default fields took less time to complete, then pre-filled, by ' + str(round(sqthenrtMeanDifference, 3)) + ' seconds'

    return render_template('thanks_completed.html', result = result, numReq = numReq, resultMessage = resultMessage)

def getPID():
    participant_index = db.session.query(Store_scenario_data.id).order_by(Store_scenario_data.id.desc()).all()
    if participant_index:
        participant_index = participant_index[0]
        participant_id = int(re.findall('\d+', str(participant_index))[0]) + 1
        session['user_data'].update({'PID': participant_id})
    else:
        session['user_data'].update({'PID': 1})

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

if __name__=='__main__':
    app.run(debug=True)






