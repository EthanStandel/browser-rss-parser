export function disclosureDisplay(typeofDisclosure) {

  const x = document.getElementById("discHeader " + typeofDisclosure);
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
  const x = document.querySelectorAll("#discPlus")
  if (show === undefined) {
    if (document.getElementById("DiscAllDisplay")?.textContent.includes("Tout voir")) {
      Array.from(x).forEach( el => {
        if (el.parentElement.className.includes("noSubtopic")) {
          }
        else {
          el.parentElement.classList.add("largeDisplay")
        }}
      )
      document.getElementById("DiscAllDisplay").textContent = "Tout cacher"
    }
  
    else {
      Array.from(x).forEach( el => {
        if (el.parentElement.className.includes("noSubtopic")) {
          }
        else {
          el.parentElement.classList.remove("largeDisplay")
        }}
      )
      document.getElementById("DiscAllDisplay").textContent = "Tout voir"
    }
  } else {
    document.getElementById("DiscAllDisplay").textContent = "Tout voir"
  }
}