const today = new Date();
let day = today.getDay()

var LàVdiffusion = ""
var LàVdisplay =""
if ((day == 6) || (day == 0)) {
  var LàVdiffusion = "Du lundi au vendredi"
  var LàVdisplay = "NOT"
}

// test for display only on some days of the week
var SDdisplay = ""
var SDdiffusion = ""
if (!((day == 6) || (day == 0))) {
  var SDdisplay = "NOT"
  var SDdiffusion = "Samedi et dimanche"
}

var Ddisplay = ""
var Ddiffusion = ""
if (day != 0) {
  var Ddisplay = "NOT"
  var Ddiffusion = "Chaque dimanche"
}

var Sdisplay = ""
var Sdiffusion = ""
if (day != 0) {
  var Sdisplay = "NOT"
  var Sdiffusion = "Chaque samedi"
}


export { SDdisplay, SDdiffusion }
export { Ddisplay, Ddiffusion }
export { Sdisplay, Sdiffusion }
export {LàVdiffusion, LàVdisplay }