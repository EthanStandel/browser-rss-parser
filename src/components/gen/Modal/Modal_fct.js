export function ModalDisplay(displayedStyle) {

    if (document.getElementById('genPopUp').className.includes("shown")) {
        document.getElementById('genPopUp').classList.remove("shown")
        document.body.style.overflow = "auto"
    }
    else {
        document.getElementById('genPopUp').classList.add("shown")
        document.body.style.overflow = "hidden"
    }
}

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal