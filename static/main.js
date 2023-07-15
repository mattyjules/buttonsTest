    let formElementManager = null;
    let extractionData = null;
    let metrics = null;
    let landingJS = null;
    let fieldStates = null;
    let popup = null;


    function initMain() {
        formElementManager = new FormElementManager();
        extractionData = new ExtractionData();
        metrics = new Metrics();
        landingJS = new LandingJS();
        fieldStates = new FieldStates();
        popup = new Popup();

    }