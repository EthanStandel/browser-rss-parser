export function ModalDisplay(modalID) {
    const x = document.getElementById("Modal" + modalID);
    x.classList.toggle("displayedModal")

    if (x.className.includes("displayedModal")) {
        document.getElementById('root').style.overflow = 'hidden'
    } else {
        document.getElementById('root').style.overflow = 'auto'
    }
}

export function scrollModalBackground(modalID) {
    const x = document.getElementById("Modal" + modalID).getElementsByClassName('modalHeader')[0];
    if (document.getElementById("Modal" + modalID).getElementsByClassName('modalDialog')[0].scrollTop > 0) {
        x.style.backgroundColor = "var(--systemHeaderMaterial)"
        x.style.borderBottom = "0.5px solid var(--separator)"
        x.style.backdropFilter = 'blur(27px) saturate(1.8)'
        x.getElementsByTagName('h4')[0].classList.add('scrolled')
    } else {
        x.style.backgroundColor = "rgba(0,0,0,0)"
        x.style.borderBottom = "0 solid rgba(0,0,0,0)"
        x.style.backdropFilter = 'none'
        x.getElementsByTagName('h4')[0].classList.remove('scrolled') 
    }
    
    
}

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal