export function sidebarDisplayInverted() {
    const x = document.getElementById("uiSplit-sidebar");
    const y = document.getElementById("uiSplit-main");
    const z = document.getElementById("sidebarDisplayInverted");
    if (x.className.includes("displayed")) {
      x.classList.remove("displayed")
      y.style.marginLeft = "0"
      z.style.fill = "var(--secondaryLabel)"
      z.style.backgroundColor = "rgba(0,0,0,0)"
      
    } else {
      x.classList.add("displayed")
      y.style.marginLeft = "230px"
      z.style.fill = "var(--colorTheme)"
      z.style.backgroundColor = "var(--quaternarySystemFill)"

    }
}