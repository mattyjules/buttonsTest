from flask import Flask,redirect,url_for, render_template, request, jsonify
import random
import string


app=Flask(__name__)

@app.route('/')
def welcome():
    return render_template ('landing.html')

@app.route('/scenarios')
def scenarios():
    return render_template('scenarios.html')



if __name__=='__main__':
    app.run(debug=True)




