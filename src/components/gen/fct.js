export function toggleElement(id) {
  document.getElementById(id).classList.toggle("show");
}

export function filterTopics() { // used for the searchbar in the sidebar to filter topics
  var input = document.getElementById("searchBox");
  var filter = input.value.toUpperCase();
  var div = document.getElementById("topicsList");
  var li = div.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    var txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export function activeSVG(svgID, baseColor, activeColor) {
  document.getElementById(svgID).style.fill === String(activeColor) ? document.getElementById(svgID).style.fill = baseColor : document.getElementById(svgID).style.fill = String(activeColor)
}

export function changeDisplayedForeignLanguage() {
  var selectedLanguageISO3Code = document.getElementById('DisplayedForeignLangageSelect').value;
  const foreignLanguages = ['deu','eng','esp'].filter(item => item !== selectedLanguageISO3Code)
  foreignLanguages.forEach(el => {
    document.querySelectorAll(`[lang=` + el + `]`).forEach(elL => {
      elL.style.display = 'none'
    })
  })
}