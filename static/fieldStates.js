class FieldStates {
    checkboxArray = [];
    stringArray = [];

       updateStateArrays() {
            this.checkboxState();
            this.radioState();
            this.textBoxState();
        }

        checkboxState() {
                $('input[type=checkbox]').each(function () {
                        this.checked ? fieldStates.checkboxArray.push("1") : fieldStates.checkboxArray.push("0");
                });
                metrics.checkboxArray = this.checkboxArray.toString();
        }

        radioState() {
                var checkRadioArray = [];
                $('input[type=radio]').each(function () {
                        this.checked ? checkRadioArray.push("1") : checkRadioArray.push("0");
                });

                metrics.checkRadioArray = checkRadioArray.toString();

        }

        textBoxState(){
                this.stringArray = [
                     "Level ID Comment: " + String(formElementManager.levelComment.value),
                     "Needle Comment: " + String(formElementManager.needleComment.value),
                     "Needle Length Comment: " + String(formElementManager.lengthCommentNeedle.value),
                     "bupVolume: " + String(formElementManager.bupVolume.value),
                     "diamorph dose: " + String(formElementManager.diamorphDose.value),
                     "block height comment: " + String(formElementManager.blockHeightComment.value),
                     "Complications Comment: " + String(formElementManager.complicationsComment.value),
                     "Additional Comments: " + String(formElementManager.addNotesComment.value)
                ]
            metrics.stringArray = this.stringArray.toString();
        }
}

