export function disclosureDisplay(typOfDiscHeader, typeofDisclosure) {

  const x = document.getElementById(typOfDiscHeader + " " + typeofDisclosure);
  const X = x.parentElement;
  let transitionTime = 0.4*Number(X.className.split(" ")[0].replace(/\D/g, "")) //0.4s for 1 elements
  if (transitionTime > 1.5) {
    transitionTime = 1.5
  }

  X.lastChild.style.transition = "max-height " + transitionTime + "s ease-in-out"
  x.style.transition = "border-color " + 0.4 + "s ease-in-out" 
  if (X.className.includes("largeDisplay")) {
    X.classList.remove("largeDisplay")
  } else {
    X.classList.add("largeDisplay")
  }
}

export function DiscAllDisplay(show) { // the parameter tells the function to reset to 'Tout voir'
  let x = document.querySelectorAll("#discPlus")
  let y = document
  
  if ((show === undefined) ?? (show === "")) {
    if (y.getElementById("DiscAllDisplay")?.textContent.includes("Tout voir")) {
      Array.from(x).forEach( el => {
        if (el.parentElement.className.includes("noSubtopic")) {
          }
        else {
          el.parentElement.classList.add("largeDisplay")
        }}
      )
      y.getElementById("DiscAllDisplay").textContent = "Tout cacher"
    }
  
    else {
      Array.from(x).forEach( el => {
        if (el.parentElement.className.includes("noSubtopic")) {
          }
        else {
          el.parentElement.classList.remove("largeDisplay")
        }}
      )
      y.getElementById("DiscAllDisplay").textContent = "Tout voir"
    }
  } else {
    y.getElementById("DiscAllDisplay").textContent = "Tout voir"
  }
}