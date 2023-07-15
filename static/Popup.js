class Popup {
    constructor() {
        this.mask = document.getElementById("mask");
        this.enteredPopup = document.getElementById("entered-popup");
    }

    openPopup() {
        // sets the Popup to visible
        this.mask.style.display = "block";
        this.enteredPopup.style.display = "block";

        //centres display - finds out how wide the page is then divides it by to, then substracts the size of 1/2 the popup and then sets the left margin to that value
        this.enteredPopup.style.left = (($(document).width() / 2) - (this.enteredPopup.offsetWidth / 2)) + "px";

        //bring user window view to top of the page to see the popup
        window.scrollTo(0,0);
    }


    closePopup() {
        this.mask.style.display = "none";
        this.enteredPopup.style.display = "none";

    }
}