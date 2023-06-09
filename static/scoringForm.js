function calculateResult() {
   var spinal = document.getElementsByName("spinal-checkbox");
   var epidural = document.getElementsByName("epidural-checkbox");
   var cse = document.getElementsByName("cse-checkbox");
   var spinalCatheter = document.getElementsByName("spinal-catheter-checkbox");

   var identityCheck = document.getElementsByName("identity-checkbox");
   var cannulaCheck = document.getElementsByName("cannula-checkbox");
   var monitorsEqptCheck = document.getElementsByName("monitors-eqpt-checkbox");
   var surgicalConsentCheck = document.getElementsByName("surgical-consent-checkbox");
   var emergencyDrugsCheck = document.getElementsByName("emergency-drugs-checkbox");
   var siteMarkedCheck = document.getElementsByName("site-marked-checkbox");

   var epiduralAbscessConsent = document.getElementsByName("epidural-abscess-checkbox");
   var pDPHConsent = document.getElementsByName("PDPH-checkbox");
   var haematomaConsent = document.getElementsByName("haematoma-checkbox");
   var infectionConsent = document.getElementsByName("infection-checkbox");
   var tempNerveConsent = document.getElementsByName("temp-nerve-checkbox");
   var permNerveConsent = document.getElementsByName("perm-nerve-checkbox");
   var paraplegiaConsent = document.getElementsByName("paraplegia-checkbox");
   var lASTConsent = document.getElementsByName("LAST-checkbox");
   var painFailureConsent = document.getElementsByName("pain-failure-checkbox");
   var conversionGAConsent = document.getElementsByName("conversion-GA-checkbox");
   var motorBlockConsent = document.getElementsByName("motor-Block-checkbox");
   var urinaryRetentionConsent = document.getElementsByName("urinary-Retention-checkbox");
   var hypotensionConsent = document.getElementsByName("hypotension-checkbox");
   var nauseaConsent = document.getElementsByName("nausea-checkbox");
   var itchingConsent = document.getElementsByName("itching-checkbox");
   var rfAnaesConsent = document.getElementsByName("rf-to-anaes-assess-checkbox");
   var rfConsentFormConsent = document.getElementsByName("rf-consent-form-checkbox");

   var leftLatPosition = document.getElementsByName("left-lateral-checkbox");
   var rightLatPosition = document.getElementsByName("right-lateral-checkbox");
   var sittingPosition = document.getElementsByName("sitting-checkbox");

   var alcoholSwabPrep = document.getElementsByName("alcohol-swab-checkbox");
   var betadinePrep = document.getElementsByName("betadine-checkbox");
   var chlorhexPrep = document.getElementsByName("chlorhex-checkbox");
   var gownPrep = document.getElementsByName("gown-checkbox");
   var hatPrep = document.getElementsByName("hat-checkbox");
   var drapePrep = document.getElementsByName("drape-checkbox");
   var glovesPrep = document.getElementsByName("gloves-checkbox");
   var handHygienePrep = document.getElementsByName("hand-hygiene-checkbox");
   var maskPrep = document.getElementsByName("mask-checkbox");

   var pulseOxMonitoring = document.getElementsByName("pulse-ox-checkbox");
   var etco2Monitoring = document.getElementsByName("etco2-checkbox");
   var ecgMonitoring = document.getElementsByName("ecg-checkbox");

   var landmarkLevel = document.getElementsByName("landmark-checkbox");
   var ultrasoundMonitoring = document.getElementsByName("ultrasound-checkbox");
   var levelComment = document.getElementsByName("level-comment");

   var leftParaApproach = document.getElementsByName("left-paramedian-checkbox");
   var midlineApproach = document.getElementsByName("midline-checkbox");
   var rightParaApproach = document.getElementsByName("right-paramedian-checkbox");

   var l12Level = document.getElementsByName("l1-2-checkbox");
   var l23Level = document.getElementsByName("l2-3-checkbox");
   var l34Level = document.getElementsByName("l3-4-checkbox");
   var l45Level = document.getElementsByName("l4-5-checkbox");
   var l5s1Level = document.getElementsByName("l5-s1-checkbox");

   var nonCuttingNeedle = document.getElementsByName("non-cutting-checkbox");
   var cuttingNeedle = document.getElementsByName("cutting-checkbox");
   var shortBevelNeedle = document.getElementsByName("short-bevel-checkbox");
   var longBevelNeedle = document.getElementsByName("long-bevel-checkbox");
   var tuohyNeedle = document.getElementsByName("cutting-checkbox");
   var twentyTwoGNeedle = document.getElementsByName("twenty-two-g-checkbox");
   var twentyFiveGNeedle = document.getElementsByName("twenty-five-g-checkbox");
   var twentyNineGNeedle = document.getElementsByName("twenty-nine-g-checkbox");
   var ninetymmNeedle = document.getElementsByName("ninetymm-checkbox");
   var oneFiveSixmmNeedle = document.getElementsByName("one-five-six-mm-checkbox");
   var lengthCommentNeedle = document.getElementsByName("length-comment");

   var firstPass = document.getElementsByName("first-pass-checkbox");
   var secondPass = document.getElementsByName("second-pass-checkbox");
   var moreTwoPass = document.getElementsByName("over-2-passes-checkbox");

   var lidocaineAgent = document.getElementsByName("lidocaine-checkbox");
   var bupAgent = document.getElementsByName("bup-checkbox");
   var bupVolume = parseInt(document.getElementsByName("bup-volume").value);
   var diamorphAgent = document.getElementsByName("diamorphine-checkbox");
   var diamorphDose = parseInt(document.getElementsByName("diamorphine-dose").value);

   var coldT1Block = document.getElementsByName("coldt1-checkbox");
   var coldT2Block = document.getElementsByName("coldt2-checkbox");
   var coldT3Block = document.getElementsByName("coldt3-checkbox");
   var coldT4Block = document.getElementsByName("coldt4-checkbox");
   var coldT5Block = document.getElementsByName("coldt5-checkbox");
   var coldT6Block = document.getElementsByName("coldt6-checkbox");
   var coldT7Block = document.getElementsByName("coldt7-checkbox");
   var coldT8Block = document.getElementsByName("coldt8-checkbox");
   var coldT9Block = document.getElementsByName("coldt9-checkbox");
   var coldT10Block = document.getElementsByName("coldt10-checkbox");

   var touchT1Block = document.getElementsByName("toucht1-checkbox");
   var touchT2Block = document.getElementsByName("toucht2-checkbox");
   var touchT3Block = document.getElementsByName("toucht3-checkbox");
   var touchT4Block = document.getElementsByName("toucht4-checkbox");
   var touchT5Block = document.getElementsByName("toucht5-checkbox");
   var touchT6Block = document.getElementsByName("toucht6-checkbox");
   var touchT7Block = document.getElementsByName("toucht7-checkbox");
   var touchT8Block = document.getElementsByName("toucht8-checkbox");
   var touchT9Block = document.getElementsByName("toucht9-checkbox");
   var touchT10Block = document.getElementsByName("toucht10-checkbox");

   var blockHeightComment = document.getElementsByName("block-height-comment");

   var difficultCSFComplications = document.getElementsByName("difficult-to-access-csf-checkbox");
   var bloodyTapComplications = document.getElementsByName("bloody-tap-checkbox");
   var transientParasthesiaComplications = document.getElementsByName("transient-parasthesia-checkbox");
   var highSpinalComplications = document.getElementsByName("high-spinal-checkbox");
   var profoundHypotensionComplications = document.getElementsByName("profound-hypotension-checkbox");
   var wellToleratedComplications = document.getElementsByName("well-tolerated-checkbox");
   var neuraxialAbandonedComplications = document.getElementsByName("neuraxial-abandoned-checkbox");
   var painProcedureComplications = document.getElementsByName("pain-in-proc-checkbox");
   var failureComplications = document.getElementsByName("failure-checkbox");
   var complicationsComment = document.getElementsByName("complications-comment");

   var additionalNotesComment = document.getElementsByName("add-notes-comment");


   var neuraxialType = document.getElementsByName("neuraxial-type");
}
   if (spinal == 1) {
    neuraxialType.innerHTML = "Spinal";
   }

   else {
    neuraxialType.innerHTML = "error";

   }

