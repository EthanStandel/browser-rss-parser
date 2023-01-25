export function displayPopUp(displayedStyle) {

    if (document.getElementById('genPopUp').className.includes("shown")) {
        document.getElementById('genPopUp').classList.remove("shown")
        document.body.style.overflow = "auto"
    }
    else {
        document.getElementById('genPopUp').classList.add("shown")
        document.body.style.overflow = "hidden"
    }
}