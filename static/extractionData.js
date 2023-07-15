class ExtractionData {
    setScenario() {
        if (formElementManager.result != null) {
            "Scenario " + (22-this.scenarioArray.length) + " saved<br>"
                 this.serverDataText.innerHTML = result.rows;
        }

         //ensures that no fields are 'active' or contain anything that may result in issues with scoring
         this.clearCheckboxes()
         this.clearRadio()
         this.emptyTextFields()
         this.emptyNumbers()

         formElementManager.scenario = formElementManager.scenarioArray[0];
         formElementManager.scenTitle.innerHTML = (21 - (formElementManager.scenarioArray.length)) + "/20";

         //Sets the text for the scenarios and pre-filled state for relevant cases (others are left empty as above
         switch (formElementManager.scenario) {
             case 1:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS for Pathological CTG and no improvement with conservative measures, BMI 43";
                 formElementManager.scenOtherText.innerHTML = "Required more than 2 attempts, needle from 90mm to 156mm. 2nd pass with 156mm to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 2:
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS for Pathological CTG and no improvement with conservative measures, BMI 43";
                 formElementManager.scenOtherText.innerHTML = "Required more than 2 attempts, needle from 90mm to 156mm. 2nd pass with 156mm to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 3:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective Section - macrosomal foetus, gestational diabetes, BMI 47";
                 formElementManager.scenOtherText.innerHTML = "156mm long needle - non-cutting (whitacre) using 16g tuohy as introducer, ultrasound assisted<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 4:
                 formElementManager.scenIndications.innerHTML = "Elective Section - macrosomal foetus, gestational diabetes, BMI 47";
                 formElementManager.scenOtherText.innerHTML = "156mm long needle - non-cutting (whitacre) using 16g tuohy as introducer, ultrasound assisted<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 5:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective LSCS and sterilisation, BMI 24, Maternal request - previous traumatic delivery (failed instrumental -> cat 2 LSCS)<br>PMH Ulcerative Colitis. PSH iliocaecal resection performed at age 24";
                 formElementManager.scenOtherText.innerHTML = "Combined Spinal-Epidural, 16G Tuohy, needle through needle, 25g sprotte, clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 6:
                 formElementManager.scenIndications.innerHTML = "Elective LSCS and sterilisation, BMI 24, Maternal request - previous traumatic delivery (failed instrumental -> cat 2 LSCS)<br>PMH Ulcerative Colitis. PSH iliocaecal resection performed at age 24";
                 formElementManager.scenOtherText.innerHTML = "Combined Spinal-Epidural, 16G Tuohy, needle through needle, 25g sprotte, clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 7:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS, foetal bradycardia - BMI 35";
                 formElementManager.scenOtherText.innerHTML = "80mm non-cutting (whitacre) needle 2 passes, 1st attempt - transient parasthesia to right buttock/thigh, withdrawn and re-directed<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 8:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS, foetal bradycardia - BMI 35";
                 formElementManager.scenOtherText.innerHTML = "80mm non-cutting (whitacre) needle 2 passes, 1st attempt - transient parasthesia to right buttock/thigh, withdrawn and re-directed<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 9:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective - Pre-eclampsia, microsomia<br>PMH - scoliosis";
                 formElementManager.scenOtherText.innerHTML = "25G whitacre needle (non-cutting) use of ultrasound, L3/4, approx 5 degrees off median plane, directed towards left, initial bloody tap - cleared<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 10:
                 formElementManager.scenIndications.innerHTML = "Elective - Pre-eclampsia, microsomia<br>PMH - scoliosis";
                 formElementManager.scenOtherText.innerHTML = "25G whitacre needle (non-cutting) use of ultrasound, L3/4, approx 5 degrees off median plane, directed towards left, initial bloody tap - cleared<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 11:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective - Pre-eclampsia, microsomia<br>PMH - scoliosis";
                 formElementManager.scenOtherText.innerHTML = "25G whitacre needle (non-cutting) use of ultrasound, L3/4, approx 5 degrees off median plane, directed towards left, initial bloody tap - cleared<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 12:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective for Primary HSV";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";

                 break;

             case 13:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective Maternal Request - Previous traumatic delivery (emergency CS due to foetal distress)";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 14:
                 formElementManager.scenIndications.innerHTML = "Elective Maternal Request - Previous traumatic delivery (emergency CS due to foetal distress)";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";

                 break;


             case 15:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Emergency CS for slow progress in labour";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";

                 break;

             case 16:
                 formElementManager.scenIndications.innerHTML = "Emergency CS for slow progress in labour";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 17:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS - breech presentation in labour";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 18:
                 formElementManager.scenIndications.innerHTML = "Emergency LSCS - breech presentation in labour";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 19:
                 this.setPrefills()
                 formElementManager.scenIndications.innerHTML = "Elective LSCS - placenta praevia";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;

             case 20:
                 formElementManager.scenIndications.innerHTML = "Elective LSCS - placenta praevia";
                 formElementManager.scenOtherText.innerHTML = "Full aseptic technique,25G whitacre needle, landmark, - L2/3 midline to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
                 break;


             default:

                 this.toEndPage()
         }

         this.resetVariables()
         metrics.timerStart()
         this.resetClickCountPopupCount()
     }

        //ensures that the appropriate checkboxes are filled if prefilled
    clearCheckboxes(){
        //identifies all checkboxes on scenarios and sets value to false
         var currentElement;
         currentElement=document.getElementsByClassName("scenario-check");
         for (var i=0; i<currentElement.length; i++) {
              $("#" + currentElement[i].id).prop("checked", false);
         }
    }


    //clears the contents of the form
    clearRadio() {
        var currentRadio;

        currentRadio=document.getElementsByClassName("neuraxial-radio");
            for (var i=0; i<currentRadio.length; i++) {
                  $("#" + currentRadio[i].id).prop("checked", false);
             }
    }
    emptyTextFields() {
         var currentText;

         currentText=document.getElementsByClassName("comment-text");
             for (var i=0; i<currentText.length; i++) {
                  $("#" + currentText[i].id).prop("value", "");
             }
    }
    emptyNumbers() {
        var currentNumber;

         currentNumber=document.getElementsByClassName("drug-number");
             for (var i=0; i<currentNumber.length; i++) {
                  $("#" + currentNumber[i].id).prop("value", "0");
             }

    }

    //sets defaults
    setPrefills() {

         formElementManager.spinal.click();

         formElementManager.identityCheck.click();
         formElementManager.cannulaCheck.click();
         formElementManager.monitorsEqptCheck.click();
         formElementManager.surgicalConsentCheck.click();
         formElementManager.oxygenCheck.click();
         formElementManager.suctionCheck.click();
         formElementManager.emergencyDrugsCheck.click();
         formElementManager.siteMarkedCheck.click();
         formElementManager.epiduralAbscessConsent.click();
         formElementManager.pDPHConsent.click();
         formElementManager.haematomaConsent.click();
         formElementManager.infectionConsent.click();
         formElementManager.tempNerveConsent.click();
         formElementManager.permNerveConsent.click();
         formElementManager.paraplegiaConsent.click();
         formElementManager.lASTConsent.click();
         formElementManager.painFailureConsent.click();
         formElementManager.conversionGAConsent.click();
         formElementManager.motorBlockConsent.click();
         formElementManager.urinaryRetentionConsent.click();
         formElementManager.hypotensionConsent.click();
         formElementManager.nauseaConsent.click();
         formElementManager.itchingConsent.click();
         formElementManager.sittingPosition.click();
         formElementManager.chlorhexPrep.click();
         formElementManager.allowedToDryPrep.click();
         formElementManager.gownPrep.click();
         formElementManager.hatPrep.click();
         formElementManager.drapePrep.click();
         formElementManager.glovesPrep.click();
         formElementManager.handHygienePrep.click();
         formElementManager.maskPrep.click();
         formElementManager.pulseOxMonitoring.click();
         formElementManager.etco2Monitoring.click();
         formElementManager.ecgMonitoring.click();
         formElementManager.landmarkLevel.click();
         formElementManager.midlineApproach.click();
         formElementManager.nonCuttingNeedle.click();
         formElementManager.twentyFiveGNeedle.click();
         formElementManager.ninetymmNeedle.click();
         formElementManager.firstPass.click();
         formElementManager.lidocaineAgent.click();
         formElementManager.bupAgent.click();
         formElementManager.bupVolume.value = 2.5;
         formElementManager.diamorphAgent.click();
         formElementManager.diamorphDose.value = 300;
         formElementManager.coldT2Block.click();
         formElementManager.touchT5Block.click();
         formElementManager.wellToleratedComplications.click();

    }

    //function runs to hook bup. up button press '+' changing value in field
    bupUp() {
         var vol = parseFloat(formElementManager.bupVolume.value);

            if (vol <= 4.9) {
                vol += 0.1;

                formElementManager.bupVolume.value = vol.toFixed(1);

        }
    }

    //function runs to hook bup. up button press '-' changing value in field
    bupDown() {
        var vol = parseFloat(formElementManager.bupVolume.value);

        if (vol >= 0.1) {
            vol -= 0.1;

            formElementManager.bupVolume.value = vol.toFixed(1);
        }
    }

    //function runs to hook diamorph. up button press '+' changing value in field
    diamorphUp() {
         var dose = parseFloat(formElementManager.diamorphDose.value);

            if (dose <= 450) {
                dose += 50;

                formElementManager.diamorphDose.value = dose.toFixed(0);
        }
    }
    //function runs to hook diamorph. down button press '-' changing value in field
    diamorphDown() {
        var dose = parseFloat(formElementManager.diamorphDose.value);

        if (dose >= 50) {
            dose -= 50;

            formElementManager.diamorphDose.value = dose.toFixed(0);
        }

    }


    //logic test to proceed to scenarios if eligibility and consent confirmed
    eligValidation() {
        if (formElementManager.eligCheck.checked) {
            //directs to scenarios page
            location.href = '/scenarios';

        } else {
            formElementManager.comment.innerHTML = "Participants must confirm eligibility and consent to proceed";
        }
    }

    //directs to thanks page
     toExit() {
        location.href = '/thanks_incomplete';
    }

    //directs to thanks page
     toEndPage() {
        location.href = '/thanks_completed';
    }


    //Spinal radio chosen scores +1 in all but scenarios 5 & 6 (which is cse)
    updateNeuraxialScore() {
        switch (formElementManager.scenario) {
            case 5:
            case 6:
                if (formElementManager.cse.checked) {
                    metrics.neuraxialScore = 1;
                } else {
                    metrics.neuraxialScoreaxialNonScore = 1;
                }
            break;

            default:
                if (formElementManager.spinal.checked) {
                    metrics.neuraxialScore = 1;
                } else {
                    metrics.neuraxialScoreaxialNonScore = 1;
                }
            break;

        }
    }

    //buttons with class "always-expected" should be clicked -> add 1 if checked to score
    updateAlwaysExpectedScore() {
        //identifies all checkboxes on scenarios and sets value to false
         var currentElement = null;
         currentElement=document.getElementsByClassName("always-expected");
         for (var i=0; i<currentElement.length; i++) {
              if (currentElement[i].checked) {
                  metrics.alwaysExpectedScore++
              }
         }
    }

    //buttons with class "not-expected" should be clicked -> add 1 if checked to nonscore
    updateNotExpectedNonScore() {
        //identifies all checkboxes on scenarios and sets value to false
         var currentElement = null;
         currentElement=document.getElementsByClassName("not-expected");
         for (var i=0; i<currentElement.length; i++) {
              if (currentElement[i].checked) {
                  metrics.notExpectedNonScore++;
              }
         }
    }

    updateLevelIDScore() {
        //finds cases where levelID is USS and if selected 1 on score, if wrong is selected gets non-score (any comment scores)
        switch (formElementManager.scenario) {
            case 3:
            case 4:
            case 9:
            case 10:
                if (formElementManager.ultrasoundLevel.checked) {
                    metrics.levelIdScore++;
                }
                if (formElementManager.landmarkLevel.checked) {
                    metrics.levelIdNonScore++;
                }

                if (formElementManager.levelComment.value != "") {
                    // value is NOT empty
                    metrics.levelIdScore++;
                }
                break;

            default:
                if (formElementManager.landmarkLevel.checked) {
                    metrics.levelIdScore++;
                }
                if (formElementManager.ultrasoundLevel.checked) {
                    metrics.levelIdNonScore++;
                }

                if (formElementManager.levelComment.value != "") {
                    // value is NOT empty
                    metrics.levelIdScore++;
                }
                break;
        }
    }
    //always expect cold block to t2
    updateColdLevelScore() {
                 var currentElement = null;
                     currentElement=document.getElementsByClassName("cold-block-level");

                     for (var i=0; i<currentElement.length; i++) {
                          if (currentElement[i].id == "coldt2-check" && currentElement[i].checked) {
                              metrics.levelScore++;
                          } else if (currentElement[i].id != "coldt2-check" && currentElement[i].checked) {
                              metrics.levelNonScore++;
                          }

                           }

                     }


    //always expect cold block to t2
    updateTouchLevelScore() {
                 var currentElement = null;

                     currentElement=document.getElementsByClassName("touch-block-level");
                     for (var i=0; i<currentElement.length; i++) {
                          if (currentElement[i].id == "toucht5-check" && currentElement[i].checked) {
                              metrics.levelScore++;
                          } else if (currentElement[i].id != "toucht5-check" && currentElement[i].checked) {
                              metrics.levelNonScore++;
                          }

                     }

                    }


    updateNeedleScore() {
            switch (formElementManager.scenario) {
                case 3:
                case 4:
                case 5:
                case 6:
                    if (formElementManager.tuohyNeedle.checked) {
                        metrics.needleScore++;
                    }

                    if (formElementManager.needleComment && formElementManager.needleComment.value) {
                            // value is NOT null or empty
                            metrics.needleScore++;
                        }

                    if (formElementManager.lengthCommentNeedle.value != "") {
                        // value is NOT empty
                        metrics.needleScore++;
                        }
                break;

                default:
                    if (formElementManager.tuohyNeedle.checked) {
                        metrics.needleNonScore++;
                   }
                break;
            }
        }

    updateNeedleLengthScore(){
            switch (formElementManager.scenario) {
                case 1:
                case 2:
                    if (formElementManager.ninetymmNeedle.checked) {
                        metrics.needleScore++;
                    }

                    if (formElementManager.oneFiveSixmmNeedle.checked) {
                        metrics.needleScore++;
                    }

                break;

                case 3:
                case 4:
                    if (formElementManager.ninetymmNeedle.checked) {
                        metrics.needleNonScore++;
                    }

                    if (formElementManager.oneFiveSixmmNeedle.checked) {
                        metrics.needleScore++;
                    }
                break;

                default:
                    if (formElementManager.ninetymmNeedle.checked) {
                        metrics.needleScore++;
                    }

                    if (formElementManager.oneFiveSixmmNeedle.checked) {
                        metrics.needleNonScore++;
                    }
                break;

            }
        }


    updatePassScore() {
         switch (formElementManager.scenario){
             case 1:
             case 2:
                 if (formElementManager.firstPass.checked){
                     metrics.passNonScore++;
                 }

                 if (formElementManager.secondPass.checked){
                     metrics.passNonScore++;
                 }

                 if (formElementManager.moreTwoPass.checked){
                     metrics.passScore++;
                 }
             break;

             case 7:
             case 8:
                 if (formElementManager.firstPass.checked){
                     metrics.passNonScore++;
                 }

                 if (formElementManager.secondPass.checked){
                     metrics.passScore++;
                 }

                 if (formElementManager.moreTwoPass.checked){
                     metrics.passNonScore++;
                 }
             break;

             default:
                if (formElementManager.firstPass.checked){
                     metrics.passScore++;
                 }

                 if (formElementManager.secondPass.checked){
                     metrics.passNonScore++;
                 }

                 if (formElementManager.moreTwoPass.checked){
                     metrics.passNonScore++;
                 }
             break;
         }
    }


    updateAgentScore() {
            if (formElementManager.bupVolume.value == 0){
            //bup volume dose is not null and between 2-3
            }else if (parseFloat(formElementManager.bupVolume.value) > 2 && parseFloat(formElementManager.bupVolume.value) < 3 ) {
                metrics.agentScore++;
            } else {
                 metrics.agentNonScore++;
            }

            if (formElementManager.diamorphDose.value == "0"){
            //checks diamorph dose is not null and then =300
            }else if (parseFloat(formElementManager.diamorphDose.value) == 300 ) {
                metrics.agentScore++;
            } else {
                 metrics.agentNonScore++;
            }


    }
    updateOtherCommentScores() {
        switch(formElementManager.scenario) {
            case 7:
            case 8:
                if (formElementManager.complicationsComment.value != "") {
            // value is NOT empty
            metrics.otherCommentScore++;
            }

            if (formElementManager.addNotesComment.value != "") {
            // value is NOT empty
            metrics.otherCommentScore++;
            }
            break;
        }

    }
    updateDifficultCSF(){
        switch (formElementManager.scenario) {
            case 1:
            case 2:
            case 9:
            case 10:
                if (formElementManager.difficultCSFComplications.checked) {
                    metrics.scenarioScore++;
                }
            break;

            default:
                if (formElementManager.difficultCSFComplications.checked) {
                    metrics.scenarioNonScore++;
                }
            break;
        }
    }

    updateBloodyTap(){
        switch (formElementManager.scenario) {
            case 9:
            case 10:
                if (formElementManager.bloodyTapComplications.checked) {
                    metrics.scenarioScore++;
                }
            break;

            default:
                if (formElementManager.bloodyTapComplications.checked) {
                    metrics.scenarioNonScore++;
                }
            break;
        }
    }

    updateTransientParathesia(){
        switch (formElementManager.scenario) {
            case 7:
            case 8:
                if (formElementManager.transientParasthesiaComplications.checked) {
                    metrics.scenarioScore++;
                }
            break;

            default:
                if (formElementManager.transientParasthesiaComplications.checked) {
                    metrics.scenarioNonScore++;
                }
            break;
        }
    }

    //Makes the strings based on inputs, for the popup
    neuraxialString() {
          if (formElementManager.spinal.checked) {
         formElementManager.neuraxialType.innerHTML = " - Spinal";
          } else if (formElementManager.epidural.checked) {
             formElementManager.neuraxialType.innerHTML = " Epidural";
          } else if (formElementManager.cse.checked) {
             formElementManager.neuraxialType.innerHTML = " C.S.E";
          } else if (formElementManager.spinalCatheter.checked) {
             formElementManager.neuraxialType.innerHTML = " Spinal Catheter";
          } else {
            formElementManager.neuraxialType.innerHTML = "No Neuraxial Type Selected";
        }
    }

    preProcedureString() {
        var procString = "";
        var procFound = false;

        if (formElementManager.identityCheck.checked) {
            procString += "Identity, ";
            procFound = true;
        }

        if (formElementManager.cannulaCheck.checked) {
            procString += "IV Cannula, ";
            procFound = true;
        }

        if (formElementManager.monitorsEqptCheck.checked) {
            procString += "Monitors and Eqpt Checked, ";
            procFound = true;
        }

        if (formElementManager.surgicalConsentCheck.checked) {
            procString += "Surgical Consent Confirmed, ";
            procFound = true;
        }

        if (formElementManager.oxygenCheck.checked) {
            procString  += "Oxygen Available, ";
            procFound = true;
        }

        if (formElementManager.suctionCheck.checked) {
            procString  += "Suction Available, ";
            procFound = true;
        }

        if (formElementManager.emergencyDrugsCheck.checked) {
          procString  += "Emergency Drugs Available, ";
          procFound = true;
        }

        if (formElementManager.siteMarkedCheck.checked) {
           procString  += "Site Marked or N/a ";
           procFound = true;

        }
        //check if procfound is false (has not been set true by any other statement)
        if (!procFound) {
             procString = "no Pre-Procedure Checks selected";
        }

         formElementManager.preProcText.innerHTML = procString;
    }

    anaesRiskString() {
        var riskString = "";
        var riskFound = false;

     if (formElementManager.epiduralAbscessConsent.checked) {
            riskString += "Epidural Abscess, ";
            riskFound = true;
        }

        if (formElementManager.pDPHConsent.checked) {
            riskString += "PDPH 1:100-500, ";
            riskFound = true;
        }

        if (formElementManager.haematomaConsent.checked) {
           riskString += "Haematoma, ";
            riskFound = true;
        }

        if (formElementManager.infectionConsent.checked) {
            riskString += "Infection, ";
        }

        if (formElementManager.tempNerveConsent.checked) {
            riskString  += "Temporary Nerve Damage 1:1000, ";
            riskFound = true;
        }

        if (formElementManager.permNerveConsent.checked) {
            riskString  += "Permanent Nerve Damage 1:23500-50500, ";
            riskFound = true;
        }

        if (formElementManager.paraplegiaConsent.checked) {
          riskString  += "Paraplegia 1:54500-141500, ";
          riskFound = true;
        }

        if (formElementManager.lASTConsent.checked) {
           riskString  += "LA systemic Toxicity, ";
           riskFound = true;
        }

        if (formElementManager.painFailureConsent.checked) {
           riskString  += "Pain/failure, ";
           riskFound = true;
        }

        if (formElementManager.conversionGAConsent.checked) {
           riskString  += "Conversion to GA, ";
           riskFound = true;
        }

        if (formElementManager.motorBlockConsent.checked) {
           riskString  += "Motor Block, ";
           riskFound = true;
        }

        if (formElementManager.urinaryRetentionConsent.checked) {
           riskString  += "Urinary Retention/Catheter, ";
           riskFound = true;
        }

        if (formElementManager.hypotensionConsent.checked) {
           riskString  += "hypotension, ";
           riskFound = true;
        }

        if (formElementManager.nauseaConsent.checked) {
           riskString  += "Nausea, ";
           riskFound = true;
        }

        if (formElementManager.itchingConsent.checked) {
           riskString  += "Itching, ";
           riskFound = true;
        }

        if (formElementManager.rfAnaesConsent.checked) {
           riskString  += "refer to Anaesthetic Consent Form, ";
           riskFound = true;
        }

        if (formElementManager.rfConsentFormConsent.checked) {
           riskString  += "refer to Surgical Consent Form, ";
           riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Anaesthetic Risks selected";
        }

        formElementManager.anaesRiskText.innerHTML = riskString;
    }

    positionString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.leftLatPosition.checked) {
            riskString += "Left Lateral Position, ";
            riskFound = true;
        }

        if (formElementManager.rightLatPosition.checked) {
            riskString += "Right Lateral Position, ";
            riskFound = true;
        }

        if (formElementManager.sittingPosition.checked) {
           riskString += "Sitting.";
            riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Position selected";
        }

        formElementManager.positionText.innerHTML = riskString;
    }

    prepString() {
        var riskString = "";
        var riskFound = false;

     if (formElementManager.alcoholSwabPrep.checked) {
            riskString += "Alcohol Swab, ";
            riskFound = true;
        }

        if (formElementManager.betadinePrep.checked) {
            riskString += "Betadine, ";
            riskFound = true;
        }

        if (formElementManager.betaseptPrep.checked) {
           riskString += "Betasept, ";
            riskFound = true;
        }

        if (formElementManager.chlorhexPrep.checked) {
            riskString += "0.5% Chlorhex, ";
        }

        if (formElementManager.allowedToDryPrep.checked) {
            riskString  += "Allowed to dry, ";
            riskFound = true;
        }

        if (formElementManager.gownPrep.checked) {
            riskString  += "Gown, ";
            riskFound = true;
        }

        if (formElementManager.hatPrep.checked) {
          riskString  += "Hat, ";
          riskFound = true;
        }

        if (formElementManager.drapePrep.checked) {
           riskString  += "Drape, ";
           riskFound = true;
        }

        if (formElementManager.glovesPrep.checked) {
           riskString  += "Gloves, ";
           riskFound = true;
        }

        if (formElementManager.handHygienePrep.checked) {
           riskString  += "Hand Hygiene, ";
           riskFound = true;
        }

        if (formElementManager.maskPrep.checked) {
           riskString  += "Mask, ";
           riskFound = true;
        }


        if (!riskFound) {
             riskString = "no Prep selected";
        }
        formElementManager.prepText.innerHTML = riskString;
    }

    monitorString() {
        var riskString = "";
        var riskFound = false;

     if (formElementManager.pulseOxMonitoring.checked) {
            riskString += "Continuous Pulse Oximetry, ";
            riskFound = true;
        }

        if (formElementManager.etco2Monitoring.checked) {
            riskString += "ETCO2, ";
            riskFound = true;
        }

        if (formElementManager.ecgMonitoring.checked) {
           riskString += "ECG, ";
            riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Monitoring selected";
        }

        formElementManager.monitorText.innerHTML = riskString;
    }

    levelIdString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.landmarkLevel.checked) {
            riskString += "Landmark, ";
            riskFound = true;
        }

        if (formElementManager.ultrasoundLevel.checked) {
            riskString += "Ultrasound, ";
            riskFound = true;
        }

        if (formElementManager.levelComment.value != "") {
        // value is NOT empty
            riskString += "Level ID: " + formElementManager.levelComment.value + ", ";
            riskFound = true;

        } else {
         //   No text Found in level ID comment
        }

        if (!riskFound) {
            riskString = "no Level Id field selected";
        }
        formElementManager.levelIDText.innerHTML = riskString;
    }

    approachString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.leftParaApproach.checked) {
            riskString += "Left Paramedian , ";
            riskFound = true;
        }

        if (formElementManager.midlineApproach.checked) {
            riskString += "Midline, ";
            riskFound = true;
        }

        if (formElementManager.rightParaApproach.checked) {
           riskString += "Right Paramedian, ";
            riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Approach selected";
        }
        formElementManager.approachText.innerHTML = riskString;
    }

    attemptString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.firstPass.checked) {
            riskString += "1st Pass. ";
            riskFound = true;
        }

        if (formElementManager.secondPass.checked) {
            riskString += "2nd Pass. ";
            riskFound = true;
        }

        if (formElementManager.moreTwoPass.checked) {
           riskString += ">2 Passes. ";
            riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Attempt selected";
        }
        formElementManager.attemptText.innerHTML = riskString;
    }

    agentString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.lidocaineAgent.checked) {
            riskString += "<br>1% Lidocaine to skin ";
            riskFound = true;
        }

        if (formElementManager.bupAgent.checked) {
            riskString += "<br>0.5% hyperbaric bupivacaine";
            riskFound = true;
        }

        if (formElementManager.bupVolume.value !== 0) {
            // value is NOT 0
            riskString += "- " + String(formElementManager.bupVolume.value) + "ml";

        }

        if (formElementManager.diamorphAgent.checked) {
            riskString += "<br>Diamorphine - ";
            riskFound = true;
        }

        if (formElementManager.diamorphDose.value !== 0) {
            // value is NOT 0
            riskString += String(formElementManager.diamorphDose.value) + "mcg";

            if (!riskFound) {
                riskString = "no Agent selected";

            }
            formElementManager.agentText.innerHTML = riskString;
        }
    }

    levelString() {
        var riskString = "";
        var riskFound = false;

     if (formElementManager.l12Level.checked) {
            riskString += "L1-2, ";
            riskFound = true;
        }

        if (formElementManager.l23Level.checked) {
            riskString += "L2-3, ";
            riskFound = true;
        }

        if (formElementManager.l34Level.checked) {
           riskString += "L3-4, ";
            riskFound = true;
        }

        if (formElementManager.l45Level.checked) {
            riskString += "L4-5, ";
            riskFound = true;
        }

        if (formElementManager.l5s1Level.checked) {
            riskString += "L5-S1";
            riskFound = true;
        }

        if (!riskFound) {
             riskString = "no Level selected";
        }
        formElementManager.levelText.innerHTML = riskString;
    }

     needleString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.nonCuttingNeedle.checked) {
            riskString += "Non-Cutting, ";
            riskFound = true;
        }

        if (formElementManager.cuttingNeedle.checked) {
            riskString += "Cutting, ";
            riskFound = true;
        }

        if (formElementManager.shortBevelNeedle.checked) {
            riskString += "Short-bevel, ";
            riskFound = true;
        }

        if (formElementManager.longBevelNeedle.checked) {
            riskString += "Long-bevel, ";
            riskFound = true;
        }

        if (formElementManager.tuohyNeedle.checked) {
            riskString += "Tuohy, ";
            riskFound = true;
        }

        if (formElementManager.needleComment.value != "") {
        // value is NOT empty
            riskString += "Gauge Comment - " + String(formElementManager.needleComment.value) + ", ";
            riskFound = true;
        } else {
        //No text Found in Needle comment
        }

        if (formElementManager.lengthCommentNeedle.value != "") {
        // value is NOT mpty
            riskString += "Length Comment - " + String(formElementManager.lengthCommentNeedle.value) + ", ";
            riskFound = true;

        } else {
        //No text Found in Needle comment
        }

        if (!riskFound) {
            riskString = "no Needle field selected";
        }
        formElementManager.needleText.innerHTML = riskString;
    }

    assessmentString() {
             var coldString = "Block to Cold: ";
             var touchString = "<br>Block to Light Touch: ";
             var commentString = "<br> Comment: "
             var coldFound = false;
             var touchFound = false;

        if (formElementManager.coldT1Block.checked) {
            coldString += "T1 ";
            coldFound = true;
        }

        if (formElementManager.coldT2Block.checked) {
            coldString += "T2";
            coldFound = true;
        }

        if (formElementManager.coldT3Block.checked) {
            coldString += "T3 ";
            coldFound = true;
        }

        if (formElementManager.coldT4Block.checked) {
            coldString += "T4 ";
            coldFound = true;
        }

        if (formElementManager.coldT5Block.checked) {
            coldString += "T5 ";
            coldFound = true;
        }

        if (formElementManager.coldT6Block.checked) {
            coldString += "T6 ";
            coldFound = true;
        }

        if (formElementManager.coldT7Block.checked) {
            coldString += "T7 ";
            coldFound = true;
        }

        if (formElementManager.coldT8Block.checked) {
            coldString += "T8 ";
            coldFound = true;
        }

        if (formElementManager.coldT9Block.checked) {
            coldString += "T9 ";
            coldFound = true;
        }

        if (formElementManager.coldT10Block.checked) {
            coldString += "T10 ";
            coldFound = true;
        }

        if (formElementManager.touchT1Block.checked) {
            touchString += "T1 ";
            touchFound = true;
        }

        if (formElementManager.touchT2Block.checked) {
            touchString += "T2";
            touchFound = true;
        }

        if (formElementManager.touchT3Block.checked) {
            touchString += "T3 ";
            touchFound = true;
        }

        if (formElementManager.touchT4Block.checked) {
            touchString += "T4 ";
            touchFound = true;
        }

        if (formElementManager.touchT5Block.checked) {
            touchString += "T5 ";
            touchFound = true;
        }

        if (formElementManager.touchT6Block.checked) {
            touchString += "T6 ";
            touchFound = true;
        }

        if (formElementManager.touchT7Block.checked) {
            touchString += "T7 ";
            touchFound = true;
        }

        if (formElementManager.touchT8Block.checked) {
            touchString += "T8 ";
            touchFound = true;
        }

        if (formElementManager.touchT9Block.checked) {
            touchString += "T9 ";
            touchFound = true;
        }

        if (formElementManager.touchT10Block.checked) {
            touchString += "T10 ";
            touchFound = true;
        }

        if (!coldFound) {
            commentString += " No Cold Block level field selected, ";
        }

        if (!touchFound) {
            commentString += " No Cold Block level field selected, ";

            if (formElementManager.blockHeightComment.value != "")  {
            // value is NOT empty
                commentString += String(formElementManager.blockHeightComment.value);
                touchFound = true;

            } else {
                commentString += " No text Found in Block Assessment comment";
            }

        }
        formElementManager.assessmentText.innerHTML = coldString + touchString + commentString;
    }

    complicationsString() {
        var riskString = "";
        var riskFound = false;

        if (formElementManager.difficultCSFComplications.checked) {
            riskString += "Difficult to access CSF, ";
            riskFound = true;
        }

        if (formElementManager.bloodyTapComplications.checked) {
            riskString += "Bloody Tap, ";
            riskFound = true;
        }

        if (formElementManager.transientParasthesiaComplications.checked) {
            riskString += "Transient Parasthesia, ";
            riskFound = true;
        }

        if (formElementManager.painNeuraxialComplications.checked) {
            riskString += "Pain during neuraxial, ";
            riskFound = true;
        }

        if (formElementManager.highSpinalComplications.checked) {
            riskString += "High Spinal, ";
            riskFound = true;
        }

        if (formElementManager.profoundHypotensionComplications.checked) {
            riskString += "Profound hypotension, ";
            riskFound = true;
        }

        if (formElementManager.wellToleratedComplications.checked) {
            riskString += "Procedure well tolerated under block, ";
            riskFound = true;
        }

        if (formElementManager.neuraxialAbandonedComplications.checked) {
            riskString += "Neuraxial abandoned, ";
            riskFound = true;
        }

        if (formElementManager.painProcedureComplications.checked) {
            riskString += "Pain during procedure, ";
            riskFound = true;
        }

        if (formElementManager.failureComplications.checked) {
            riskString += "Failure -> GA, ";
            riskFound = true;
        }

        if (formElementManager.complicationsComment.value  != "") {
        // value is NOT empty
            riskString += String(formElementManager.complicationsComment.value);
            riskFound = true;

        }

        if (!riskFound) {
            riskString = "no Complications details selected";
        }
        formElementManager.complicationsText.innerHTML = riskString;

    }
    additionCommentString() {
        var riskString = "";

        if (formElementManager.addNotesComment.value != "") {
            riskString += String(formElementManager.addNotesComment.value);

        } else {
            riskString = "no Complications details selected";
        }
                formElementManager.additionalNotesText.innerHTML = riskString;
    }

    getAllScores() {
        this.updateNeuraxialScore()
        this.updateAlwaysExpectedScore()
        this.updateLevelIDScore()
        this.updateColdLevelScore()
        this.updateTouchLevelScore()

        this.updateNotExpectedNonScore()
        this.updateNeedleScore()
        this.updateNeedleLengthScore()
        this.updatePassScore()
        this.updateAgentScore()
        this.updateDifficultCSF()
        this.updateBloodyTap()
        this.updateTransientParathesia()
        this.updateOtherCommentScores()
    }

     getAllStrings() {
        this.neuraxialString()
        this.preProcedureString()
        this.anaesRiskString()
        this.positionString()
        this.prepString()
        this.monitorString()
        this.levelIdString()
        this.approachString()
        this.attemptString()
        this.agentString()
        this.levelString()
        this.needleString()
        this.assessmentString()
        this.complicationsString()
        this.additionCommentString()
     }

    //Function to calculate result based on each section
    calculateScenarioResult() {
        metrics.scenarioScore =
            metrics.scenarioScore +
            metrics.neuraxialScore
            + metrics.alwaysExpectedScore
            + metrics.levelIdScore
            + metrics.levelScore
            + metrics.needleScore
            + metrics.passScore
            + metrics.agentScore
            + metrics.otherCommentScore;

        metrics.scenarioNonScore =
            metrics.scenarioNonScore +
            metrics.notExpectedNonScore
            + metrics.neuraxialNonScore
            + metrics.levelIdNonScore
            + metrics.levelNonScore
            + metrics.needleNonScore
            + metrics.passNonScore
            + metrics.agentNonScore;

         }
    //Ensures that data retained of initial data on submit
    resetVariables(){

         metrics.scenarioScore = 0;
         metrics.scenarioNonScore = 0;

         metrics.neuraxialScore = 0;
         metrics.alwaysExpectedScore = 0;
         metrics.levelIdScore = 0;
         metrics.levelScore = 0;
         metrics.needleScore = 0;
         metrics.passScore = 0;
         metrics.agentScore = 0;
         metrics.otherCommentScore = 0;

         //for count of 'wrong' selections/inputs
         metrics.neuraxialNonScore = 0;
         metrics.notExpectedNonScore = 0;
         metrics.levelIdNonScore = 0;
         metrics.levelNonScore = 0;
         metrics.needleNonScore = 0;
         metrics.passNonScore = 0;
         metrics.agentNonScore = 0;

         //arrays must return to initial state otherwise it appends to everything submitted on first press
        metrics.checkboxArray = [];
        metrics.checkRadioArray = [];
        metrics.stringArray = [];
        fieldStates.checkboxArray = [];
        fieldStates.checkRadioArray = [];
        fieldStates.stringArray = [];

    }

    resetClickCountPopupCount(){
        metrics.numberofClicks = 0;
        metrics.numberOfClosedPopups = 0;
    }

    //Functions called when Submit button on Scenarios pressed
    submitButtonPressed() {
        var currentNumberOfClosedPopups = metrics.numberOfClosedPopups;

        if (currentNumberOfClosedPopups === 0) {
            fieldStates.updateStateArrays()
            metrics.getSubmitButton1stPressStates()
        } else {
        }
            popup.openPopup()

            this.getAllScores()
            this.getAllStrings()
            this.calculateScenarioResult()
    }


    //Amend Button on popop pressed
    amendButtonPressed() {
        //score resets to Zero if this button pressed otherwise the score will count all again on the submit button
        this.resetVariables()
        metrics.processAmendClicks()
        popup.closePopup()
        window.scrollTo(0,0);

    }

    //Commit Button on popup pressed
    commitButtonPressed() {
        metrics.timerEnd();
        fieldStates.updateStateArrays()

        var server_data = [
             {"Scenario": formElementManager.scenarioArray[0]},
             {"ScenarioScore": metrics.scenarioScore},
             {"ScenarioNonScore": metrics.notExpectedNonScore},
             {"ScenarioTimeTaken": metrics.calculateElapsedTime()},
             {"ScenarioClosedPopupTimes": metrics.numberOfClosedPopups},
             {"CheckBoxInitialArray": metrics.checkBoxInitialArray},
             {"CheckRadioInitialArray": metrics.checkRadioInitialArray},
             {"StringInitialArray": metrics.stringInitialArray},
             {"CheckBoxFinalArray": metrics.checkboxArray},
             {"CheckRadioFinalArray": metrics.checkRadioArray},
             {"StringFinalArray": metrics.stringArray},

             {"ScenarioInitialScore": metrics.scenarioSubmitScore},
             {"ScenarioInitialNonScore": metrics.scenarioSubmitNonScore},
             {"ScenarioTotalClicks": metrics.numberofClicks}
         ]

        $.ajax({
               type: "POST",
               url: "/process_scenario",
               data: JSON.stringify(server_data),
               contentType: "application/json",
               dataType: 'json',
               success: function(results) {
               }
        });

        //after data sent to database update the array
        formElementManager.scenarioArray.shift()

        //reset page appearance to start for next scenario and clear fields
        popup.closePopup()
        this.setScenario()
        window.scrollTo(0,0);

    }

 //Feedback Button on Thanks pressed
    feedbackButtonPressed() {
        var feedback_data = [
             {"FeedbackComment": String(formElementManager.feedbackComment.value)},
         ]

        $.ajax({
               type: "POST",
               url: "/process_feedback",
               data: JSON.stringify(feedback_data),
               contentType: "application/json",
               dataType: 'json',
               success: function(results) {
                 formElementManager.feedbackComment.value = "";


           //makes the toast
              var x = document.getElementById("snackbar");
              x.className = "show";
              setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

               }
        });


    }


}