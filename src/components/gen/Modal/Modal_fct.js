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
    const x = document.getElementById("modal" + modalID).getElementsByClassName('modalHeader')[0];
    const y = document.getElementById("modal" + modalID).getElementsByClassName('modalDescription')[0].getElementsByClassName('modalTitle')[0].getBoundingClientRect().top;
    const z= x.getBoundingClientRect().top;
    if (document.getElementById("modal" + modalID).getElementsByClassName('modalContent')[0].scrollTop > 0) {
        x.classList.add('scrolledHeader')
        if (z > y - 30) {
            x.classList.add('titleVisible')
        }
        else {
            x.classList.remove('titleVisible')
        }
    } else {
        x.classList.remove('scrolledHeader')
    }
}

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal