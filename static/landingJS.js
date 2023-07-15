class LandingJS {

//on load ensure that the toggle is set to no
onloadSetToggle() {
    let toggleButton = document.getElementById("eligCheckText");
    toggleButton.innerHTML = "no";

    let eligCheck = document.getElementById("elig-check");
    eligCheck.checked = false

}

// sets the text of the eligibility toggle text when clicked to indicate state
funcChangeButton() {
 let toggleButton = document.getElementById("eligCheckText");

 if (toggleButton.innerHTML == "yes")
 {
    toggleButton.innerHTML = "no";
 }

 else {
    toggleButton.innerHTML = "yes";
 }
}

//logic test to proceed to scenarios if eligibility and consent confirmed
eligValidation() {
   let eligCheck = document.getElementById("elig-check");
   let comment = document.getElementById("comment");

    if (eligCheck.checked) {
        //directs to scenarios page
        location.href = '/scenarios';
    } else {
        comment.innerHTML = "Participants must confirm eligibility and consent to proceed";
    }
}

//directs to thanks page
toExit() {
    location.href = '/thanks_incomplete';
}

}