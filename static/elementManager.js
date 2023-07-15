class FormElementManager {
    constructor() {
        //this.scenarioArray = [1];
        this.scenarioArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

        function shuffle(array) {
          for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }

        shuffle(this.scenarioArray);
        this.scenario = this.scenarioArray[0];


    //defines the landing page toggle and the function for running the check function
        this.toggleButton = document.getElementById("eligCheckText");
        this.eligCheck = document.getElementById("elig-check");
        this.comment = document.getElementById("comment");

    //identify Scenario details text fields to be set programmatically
         this.serverDataText = document.getElementById("server-data-text");
         this.scenTitle = document.getElementById("scenario-name");
         this.scenIndications = document.getElementById("indications-text");
         this.scenOtherText = document.getElementById("other-text");

    //Identify the Popup fields to be updated with strings based on field states in scenarios.html
        this.neuraxialType = document.getElementById("neuraxial-type");
        this.preProcText = document.getElementById("preprocedure-output");
        this.anaesRiskText = document.getElementById("anaesthetic-risk-output");
        this.positionText = document.getElementById("position-output");
        this.prepText = document.getElementById("prep-output");
        this.monitorText = document.getElementById("monitoring-output");
        this.levelIDText = document.getElementById("level-id-output");
        this.approachText = document.getElementById("approach-output");
        this.attemptText = document.getElementById("attempt-output")
        this.agentText = document.getElementById("agent-output")
        this.levelText = document.getElementById("level-output");
        this.needleText = document.getElementById("needle-output");
        this.assessmentText = document.getElementById("assessment-output");
        this.complicationsText = document.getElementById("complications-output");
        this.additionalNotesText = document.getElementById("additional-comments-output");

    // define neuraxial type elements in scenarios.html

         this.spinal = document.getElementById("spinal-checkbox-input");
         this.epidural = document.getElementById("epidural-checkbox-input");
         this.cse = document.getElementById("cse-checkbox-input");
         this.spinalCatheter = document.getElementById("spinal-catheter-checkbox-input");

    // Defines the Pre-Procedure Check elements
         this.identityCheck = document.getElementById("identity-check");
         this.cannulaCheck = document.getElementById("cannula-check");
         this.monitorsEqptCheck = document.getElementById("monitors-eqpt-check");
         this.surgicalConsentCheck = document.getElementById("surgical-consent-check");
         this.oxygenCheck = document.getElementById("oxygen-check");
         this.suctionCheck = document.getElementById("suction-check");
         this.emergencyDrugsCheck = document.getElementById("emergency-drugs-check");
         this.siteMarkedCheck = document.getElementById("site-marked-check");

    // Defines the Anaesthetic Risk elements

        this.epiduralAbscessConsent = document.getElementById("epidural-abscess-check");
        this.pDPHConsent = document.getElementById("PDPH-check");
        this.haematomaConsent = document.getElementById("haematoma-check");
        this.infectionConsent = document.getElementById("infection-check");
        this.tempNerveConsent = document.getElementById("temp-nerve-check");
        this.permNerveConsent = document.getElementById("perm-nerve-check");
        this.paraplegiaConsent = document.getElementById("paraplegia-check");
        this.lASTConsent = document.getElementById("LAST-check");
        this.painFailureConsent = document.getElementById("pain-failure-check");
        this.conversionGAConsent = document.getElementById("conversion-GA-check");
        this.motorBlockConsent = document.getElementById("motor-Block-check");
        this.urinaryRetentionConsent = document.getElementById("urinary-retention-check");
        this.hypotensionConsent = document.getElementById("hypotension-check");
        this.nauseaConsent = document.getElementById("nausea-check");
        this.itchingConsent = document.getElementById("itching-check");
        this.rfAnaesConsent = document.getElementById("rf-to-anaes-assess-check");
        this.rfConsentFormConsent = document.getElementById("rf-consent-form-check");

    // Defines Position elements
        this.leftLatPosition = document.getElementById("left-lateral-check");
        this.rightLatPosition = document.getElementById("right-lateral-check");
        this.sittingPosition = document.getElementById("sitting-check");

    // Defines Prep elements
        this.alcoholSwabPrep = document.getElementById("alcohol-swab-check");
        this.betadinePrep = document.getElementById("betadine-check");
        this.betaseptPrep = document.getElementById("betasept-check")
        this.chlorhexPrep = document.getElementById("chlorhex-check");
        this.allowedToDryPrep = document.getElementById("allowed-to-dry-check")
        this.gownPrep = document.getElementById("gown-check");
        this.hatPrep = document.getElementById("hat-check");
        this.drapePrep = document.getElementById("drape-check");
        this.glovesPrep = document.getElementById("gloves-check");
        this.handHygienePrep = document.getElementById("hand-hygiene-check");
        this.maskPrep = document.getElementById("mask-check");

        this.pulseOxMonitoring = document.getElementById("pulse-ox-check");
        this.etco2Monitoring = document.getElementById("etco2-check");
        this.ecgMonitoring = document.getElementById("ecg-check");

        this.landmarkLevel = document.getElementById("landmark-check");
        this.ultrasoundLevel = document.getElementById("ultrasound-check");
        this.levelComment = document.getElementById("level-comment");

        this.leftParaApproach = document.getElementById("left-paramedian-check");
        this.midlineApproach = document.getElementById("midline-check");
        this.rightParaApproach = document.getElementById("right-paramedian-check");

        this.l12Level = document.getElementById("l1-2-check");
        this.l23Level = document.getElementById("l2-3-check");
        this.l34Level = document.getElementById("l3-4-check");
        this.l45Level = document.getElementById("l4-5-check");
        this.l5s1Level = document.getElementById("l5-s1-check");

        this.nonCuttingNeedle = document.getElementById("non-cutting-check");
        this.cuttingNeedle = document.getElementById("cutting-check");
        this.shortBevelNeedle = document.getElementById("short-bevel-check");
        this.longBevelNeedle = document.getElementById("long-bevel-check");
        this.tuohyNeedle = document.getElementById("tuohy-check");
        this.twentyTwoGNeedle = document.getElementById("twenty-two-g-check");
        this.twentyFiveGNeedle = document.getElementById("twenty-five-g-check");
        this.twentyNineGNeedle = document.getElementById("twenty-nine-g-check");
        this.needleComment = document.getElementById("needle-comment")
        this.ninetymmNeedle = document.getElementById("ninetymm-check");
        this.oneFiveSixmmNeedle = document.getElementById("one-five-six-mm-check");
        this.lengthCommentNeedle = document.getElementById("length-comment");

        this.firstPass = document.getElementById("first-pass-check");
        this.secondPass = document.getElementById("second-pass-check");
        this.moreTwoPass = document.getElementById("over-2-passes-check");

        this.lidocaineAgent = document.getElementById("lidocaine-check");
        this.bupAgent = document.getElementById("bup-check");
        this.bupVolume = document.getElementById("bup-volume-entry");


        this.diamorphAgent = document.getElementById("diamorphine-check");
        this.diamorphDose = document.getElementById("diamorph-dose-entry");

        this.coldT1Block = document.getElementById("coldt1-check");
        this.coldT2Block = document.getElementById("coldt2-check");
        this.coldT3Block = document.getElementById("coldt3-check");
        this.coldT4Block = document.getElementById("coldt4-check");
        this.coldT5Block = document.getElementById("coldt5-check");
        this.coldT6Block = document.getElementById("coldt6-check");
        this.coldT7Block = document.getElementById("coldt7-check");
        this.coldT8Block = document.getElementById("coldt8-check");
        this.coldT9Block = document.getElementById("coldt9-check");
        this.coldT10Block = document.getElementById("coldt10-check");

        this.touchT1Block = document.getElementById("toucht1-check");
        this.touchT2Block = document.getElementById("toucht2-check");
        this.touchT3Block = document.getElementById("toucht3-check");
        this.touchT4Block = document.getElementById("toucht4-check");
        this.touchT5Block = document.getElementById("toucht5-check");
        this.touchT6Block = document.getElementById("toucht6-check");
        this.touchT7Block = document.getElementById("toucht7-check");
        this.touchT8Block = document.getElementById("toucht8-check");
        this.touchT9Block = document.getElementById("toucht9-check");
        this.touchT10Block = document.getElementById("toucht10-check");

        this.blockHeightComment = document.getElementById("block-height-comment");

        this.difficultCSFComplications = document.getElementById("difficult-to-access-csf-check");
        this.bloodyTapComplications = document.getElementById("bloody-tap-check");
        this.painNeuraxialComplications = document.getElementById("pain-during-neuraxial-check")
        this.transientParasthesiaComplications = document.getElementById("transient-parasthesia-check");
        this.highSpinalComplications = document.getElementById("high-spinal-check");
        this.profoundHypotensionComplications = document.getElementById("profound-hypotension-check");
        this.wellToleratedComplications = document.getElementById("well-tolerated-check");
        this.neuraxialAbandonedComplications = document.getElementById("neuraxial-abandoned-check");
        this.painProcedureComplications = document.getElementById("pain-in-proc-check");
        this.failureComplications = document.getElementById("failure-check");
        this.complicationsComment = document.getElementById("complications-comment");
        this.addNotesComment = document.getElementById("add-notes-comment");

        this.feedbackComment = document.getElementById("feedback-notes-comment");

    }

}
