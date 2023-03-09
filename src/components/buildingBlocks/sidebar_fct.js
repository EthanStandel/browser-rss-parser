export function sidebarDisplayInverted() {
  const x = document.getElementById("uiSplit-sidebar");
  const y = document.getElementById("uiSplit-main");
  const z = document.getElementById("sidebarDisplayInverted");
  if (x.className.includes("displayed")) {
    x.classList.remove("displayed")
    y.style.marginLeft = "0"
    z.style.fill = "var(--secondaryLabel)"
    z.style.backgroundColor = "rgba(0,0,0,0)"
    z.classList.add('remove')

  } else {
    x.classList.add("displayed")
    y.style.marginLeft = "250px" // width of the sidebar
    z.style.fill = "var(--colorTheme)"
    z.classList.add('selected')
  }
}