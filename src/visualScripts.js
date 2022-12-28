export function disclosureDisplay(typeofDisclosure) {

    var x = document.getElementById("disclosureHeader " + typeofDisclosure);
    var X = x.parentElement;
    if (X.className.includes("largeDisplay")) {
      X.classList.remove("largeDisplay");
      X.lastChild.style.maxHeight = "0";
      x.lastChild.style.transform = "rotate(-90deg)";
      x.style.borderColor = "rgba(0,0,0,0)";
    } else {
      X.classList.add("largeDisplay")
      X.lastChild.style.maxHeight = "1000px";
      x.lastChild.style.transform = "none";
      x.style.borderColor = "var(--colorTheme)";
    }      
  }