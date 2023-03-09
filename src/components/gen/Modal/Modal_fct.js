export function ModalDisplay(modalID) {
    const x = document.getElementById("modal" + modalID);
    x.classList.toggle("displayedModal")

    if (x.className.includes("displayedModal")) {
        document.getElementById('root').style.overflow = 'hidden'
    } else {
        document.getElementById('root').style.overflow = 'auto'
    }
}

export function scrollModalBackground(modalID) {
    const modH = document.getElementById("modal" + modalID).getElementsByClassName('modalHeader')[0];
    const modT = document.getElementById("modal" + modalID).getElementsByClassName('modalDescription')[0].getElementsByClassName('modalTitle')[0]
    const modTPos = modT.getBoundingClientRect().top;
    const modTHeight = modT.getBoundingClientRect().height;
    const modHPos= modH.getBoundingClientRect().top;
    const modHHeight = modH.getBoundingClientRect().height;
    if (document.getElementById("modal" + modalID).getElementsByClassName('modalContent')[0].scrollTop > 0) {
        modH.classList.add('scrolledHeader')
        if (modHPos + modHHeight > modTPos + modTHeight - Number(window.getComputedStyle(modT).paddingBottom.replace('px',''))) { // modalTitle has a padding of 25px which is included in the height calculation
            modH.classList.add('titleVisible')
        }
        else {
            modH.classList.remove('titleVisible')
        }
    } else {
        modH.classList.remove('scrolledHeader')
    }
}

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal