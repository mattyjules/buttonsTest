
function funcChangeButton() {
 var toggleButton = document.getElementById("eligCheckText");

 if (toggleButton.innerHTML == "yes")
 {
    toggleButton.innerHTML = "no";
 }

 else {
    toggleButton.innerHTML = "yes";
 }
}


function eligValidation() {
   var pageDefault = 'https://127.0.0.1:5000'
   var eligCheck = document.getElementById("elig-check");
   var comment = document.getElementById("comment");
     if (eligCheck.checked){
      console.log("checked");
      location.href = '/scenarios';
   }
     else {
      console.log("unchecked")
      comment.innerHTML = "Participants must confirm eligibility and consent to proceed";

   }


}
function fillScenarioText() {
   console.log("loaded")

   var scenTitle = document.getElementById("scenario-name");
       scenTitle.innerHTML = "x/y";

   var scenIndications = document.getElementById("indications-text");
       scenTitle.innerHTML = "Emergency LSCS for Pathological CTG and no improvement with conservative measures, BMI 43";

   var scenTitle = document.getElementById("other-text");
       scenTitle.innerHTML = "Required more than 2 attempts, needle from 90mm to 156mm. 2nd pass with 156mm to clear CSF<br><br>Block T2 cold, T5 light touch, good effect";
}

function calculateResult() {
   console.log("here")

   var spinal = document.getElementById("spinal-checkbox-input");
   var epidural = document.getElementById("epidural-checkbox-input");
   var cse = document.getElementById("cse-checkbox");
   var spinalCatheter = document.getElementById("spinal-catheter-checkbox");

   var identityCheck = document.getElementById("identity-checkbox");
   var cannulaCheck = document.getElementById("cannula-checkbox");
   var monitorsEqptCheck = document.getElementById("monitors-eqpt-checkbox");
   var surgicalConsentCheck = document.getElementById("surgical-consent-checkbox");
   var emergencyDrugsCheck = document.getElementById("emergency-drugs-checkbox");
   var siteMarkedCheck = document.getElementById("site-marked-checkbox");

   var epiduralAbscessConsent = document.getElementById("epidural-abscess-checkbox");
   var pDPHConsent = document.getElementById("PDPH-checkbox");
   var haematomaConsent = document.getElementById("haematoma-checkbox");
   var infectionConsent = document.getElementById("infection-checkbox");
   var tempNerveConsent = document.getElementById("temp-nerve-checkbox");
   var permNerveConsent = document.getElementById("perm-nerve-checkbox");
   var paraplegiaConsent = document.getElementById("paraplegia-checkbox");
   var lASTConsent = document.getElementById("LAST-checkbox");
   var painFailureConsent = document.getElementById("pain-failure-checkbox");
   var conversionGAConsent = document.getElementById("conversion-GA-checkbox");
   var motorBlockConsent = document.getElementById("motor-Block-checkbox");
   var urinaryRetentionConsent = document.getElementById("urinary-Retention-checkbox");
   var hypotensionConsent = document.getElementById("hypotension-checkbox");
   var nauseaConsent = document.getElementById("nausea-checkbox");
   var itchingConsent = document.getElementById("itching-checkbox");
   var rfAnaesConsent = document.getElementById("rf-to-anaes-assess-checkbox");
   var rfConsentFormConsent = document.getElementById("rf-consent-form-checkbox");

   var leftLatPosition = document.getElementById("left-lateral-checkbox");
   var rightLatPosition = document.getElementById("right-lateral-checkbox");
   var sittingPosition = document.getElementById("sitting-checkbox");

   var alcoholSwabPrep = document.getElementById("alcohol-swab-checkbox");
   var betadinePrep = document.getElementById("betadine-checkbox");
   var chlorhexPrep = document.getElementById("chlorhex-checkbox");
   var gownPrep = document.getElementById("gown-checkbox");
   var hatPrep = document.getElementById("hat-checkbox");
   var drapePrep = document.getElementById("drape-checkbox");
   var glovesPrep = document.getElementById("gloves-checkbox");
   var handHygienePrep = document.getElementById("hand-hygiene-checkbox");
   var maskPrep = document.getElementById("mask-checkbox");

   var pulseOxMonitoring = document.getElementById("pulse-ox-checkbox");
   var etco2Monitoring = document.getElementById("etco2-checkbox");
   var ecgMonitoring = document.getElementById("ecg-checkbox");

   var landmarkLevel = document.getElementById("landmark-checkbox");
   var ultrasoundMonitoring = document.getElementById("ultrasound-checkbox");
   var levelComment = document.getElementById("level-comment");

   var leftParaApproach = document.getElementById("left-paramedian-checkbox");
   var midlineApproach = document.getElementById("midline-checkbox");
   var rightParaApproach = document.getElementById("right-paramedian-checkbox");

   var l12Level = document.getElementById("l1-2-checkbox");
   var l23Level = document.getElementById("l2-3-checkbox");
   var l34Level = document.getElementById("l3-4-checkbox");
   var l45Level = document.getElementById("l4-5-checkbox");
   var l5s1Level = document.getElementById("l5-s1-checkbox");

   var nonCuttingNeedle = document.getElementById("non-cutting-checkbox");
   var cuttingNeedle = document.getElementById("cutting-checkbox");
   var shortBevelNeedle = document.getElementById("short-bevel-checkbox");
   var longBevelNeedle = document.getElementById("long-bevel-checkbox");
   var tuohyNeedle = document.getElementById("cutting-checkbox");
   var twentyTwoGNeedle = document.getElementById("twenty-two-g-checkbox");
   var twentyFiveGNeedle = document.getElementById("twenty-five-g-checkbox");
   var twentyNineGNeedle = document.getElementById("twenty-nine-g-checkbox");
   var ninetymmNeedle = document.getElementById("ninetymm-checkbox");
   var oneFiveSixmmNeedle = document.getElementById("one-five-six-mm-checkbox");
   var lengthCommentNeedle = document.getElementById("length-comment");

   var firstPass = document.getElementById("first-pass-checkbox");
   var secondPass = document.getElementById("second-pass-checkbox");
   var moreTwoPass = document.getElementById("over-2-passes-checkbox");

   var lidocaineAgent = document.getElementById("lidocaine-checkbox");
   var bupAgent = document.getElementById("bup-checkbox");
   var bupVolume = parseInt(document.getElementById("bup-volume").value);
   var diamorphAgent = document.getElementById("diamorphine-checkbox");
   var diamorphDose = parseInt(document.getElementById("diamorphine-dose").value);

   var coldT1Block = document.getElementById("coldt1-checkbox");
   var coldT2Block = document.getElementById("coldt2-checkbox");
   var coldT3Block = document.getElementById("coldt3-checkbox");
   var coldT4Block = document.getElementById("coldt4-checkbox");
   var coldT5Block = document.getElementById("coldt5-checkbox");
   var coldT6Block = document.getElementById("coldt6-checkbox");
   var coldT7Block = document.getElementById("coldt7-checkbox");
   var coldT8Block = document.getElementById("coldt8-checkbox");
   var coldT9Block = document.getElementById("coldt9-checkbox");
   var coldT10Block = document.getElementById("coldt10-checkbox");

   var touchT1Block = document.getElementById("toucht1-checkbox");
   var touchT2Block = document.getElementById("toucht2-checkbox");
   var touchT3Block = document.getElementById("toucht3-checkbox");
   var touchT4Block = document.getElementById("toucht4-checkbox");
   var touchT5Block = document.getElementById("toucht5-checkbox");
   var touchT6Block = document.getElementById("toucht6-checkbox");
   var touchT7Block = document.getElementById("toucht7-checkbox");
   var touchT8Block = document.getElementById("toucht8-checkbox");
   var touchT9Block = document.getElementById("toucht9-checkbox");
   var touchT10Block = document.getElementById("toucht10-checkbox");

   var blockHeightComment = document.getElementById("block-height-comment");

   var difficultCSFComplications = document.getElementById("difficult-to-access-csf-checkbox");
   var bloodyTapComplications = document.getElementById("bloody-tap-checkbox");
   var transientParasthesiaComplications = document.getElementById("transient-parasthesia-checkbox");
   var highSpinalComplications = document.getElementById("high-spinal-checkbox");
   var profoundHypotensionComplications = document.getElementById("profound-hypotension-checkbox");
   var wellToleratedComplications = document.getElementById("well-tolerated-checkbox");
   var neuraxialAbandonedComplications = document.getElementById("neuraxial-abandoned-checkbox");
   var painProcedureComplications = document.getElementById("pain-in-proc-checkbox");
   var failureComplications = document.getElementById("failure-checkbox");
   var complicationsComment = document.getElementById("complications-comment");
   var additionalNotesComment = document.getElementById("add-notes-comment");

   var neuraxialType = document.getElementById("neuraxial-type");

   console.log(spinal)
   if (spinal.checked){
      neuraxialType.innerHTML = "- Spinal";
   }

   else if (epidural.checked){
      neuraxialType.innerHTML = "- Epidural";

   }

   else {
      neuraxialType.innerHTML = "error";

   }
}

