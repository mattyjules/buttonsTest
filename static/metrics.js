class Metrics {

    constructor() {
        this.scenarioScore = 0;
        this.scenarioNonScore = 0;

        this.numberofClicks = 0;
        this.startTime;
        this.endTime;
        this.timeInterval;
        this.numberOfClosedPopups = 0;

        //NB for compatibility with SQLite these are string with comma separations
        this.checkboxArray;
        this.checkRadioArray;
        this.stringArray;

        //Arrays for field states at submit
        this.checkBoxInitialArray;
        this.checkRadioInitialArray;
        this.stringInitialArray;

        //results to capture information at 1st Press of submit
        this.scenarioSubmitScore;
        this.scenarioSubmitNonScore;

        //'correct' inputs
        this.neuraxialScore = 0;
        this.alwaysExpectedScore = 0;
        this.levelIdScore = 0;
        this.levelScore = 0;
        this.needleScore = 0;
        this.passScore = 0;
        this.agentScore = 0;
        this.otherCommentScore = 0;

        //for count of 'wrong' selections/inputs
         this.neuraxialNonScore = 0;
         this.notExpectedNonScore = 0;
         this.levelIdNonScore = 0;
         this.levelNonScore = 0;
         this.needleNonScore = 0;
         this.passNonScore = 0;
         this.agentNonScore = 0;
    }

    processClicks() {
        this.numberofClicks ++;
    }

    getSubmitButton1stPressStates() {
         this.checkBoxInitialArray = this.checkboxArray;
         this.checkRadioInitialArray = this.checkRadioArray;
         this.stringInitialArray = this.stringArray;

         this.scenarioSubmitScore = this.scenarioScore;
         this.scenarioSubmitNonScore = this.scenarioNonScore;

         //clear the arrays after save to avoid duplication
         metrics.checkboxArray = [];
         metrics.checkRadioArray = [];
         metrics.stringArray = [];
    }

    processAmendClicks() {
        this.numberOfClosedPopups ++;
    }

    timerStart(){
        this.startTime = new Date();
    }

    timerEnd(){
        this.endTime = new Date();
    }
    calculateElapsedTime() {
        this.timeInterval = (this.endTime.getTime() - this.startTime.getTime())/1000;
    //    timeInterval is in second
        return parseFloat(parseFloat(this.timeInterval).toPrecision(3)).toString()
    }

}

