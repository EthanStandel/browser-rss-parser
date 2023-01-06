export function disclosureDisplay(typeofDisclosure) {

  const x = document.getElementById("discHeader " + typeofDisclosure);
  const X = x.parentElement;
  let transitionTime = 0.4*Number(X.className.split(" ")[0].replace(/\D/g, "")) //0.4s for 1 elements
  if (transitionTime > 2) {
    transitionTime = 2
  }

  X.lastChild.style.transition = "max-height " + transitionTime + "s ease-in-out"
  x.style.transition = "border-color " + 0.4 + "s ease-in-out" 
  if (X.className.includes("largeDisplay")) {
    X.classList.remove("largeDisplay")
  } else {
    X.classList.add("largeDisplay")
  }
}