export function toggleElement(id) {
    document.getElementById(id).classList.toggle("show");
}

export function filterTopics() {
    
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