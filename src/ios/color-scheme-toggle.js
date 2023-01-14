export function defaultTheme() {
	if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
	  return "dark";
	} else {
	  return "light";
	}
}

export function inverseTheme() {
	const defaultTheme = document.getElementById("App").getAttribute("data-color-scheme")
	if (defaultTheme === "light") {
		document.getElementById("App").setAttribute("data-color-scheme", "dark")
		document.getElementById("colorTheme").innerHTML = "<svg viewBox='0 0 100 100' height='20'><use xlink:href='./genIcons/sun.svg#path2'></use></svg>"
	}
	else {
		document.getElementById("App").setAttribute("data-color-scheme", "light")
		document.getElementById("colorTheme").innerHTML = "<svg viewBox='0 0 100 100' height='20'><use xlink:href='./genIcons/moon.svg#path2'></use></svg>"
	}
}