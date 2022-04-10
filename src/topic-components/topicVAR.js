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
if (day != 6) {
  var Sdisplay = "NOT"
  var Sdiffusion = "Chaque samedi"
}

var Vdisplay = ""
var Vdiffusion = ""
if (day != 5) {
  var Vdisplay = "NOT"
  var Vdiffusion = "Chaque vendredi"
}

var Ldisplay = ""
var Ldiffusion = ""
if (day != 1) {
  var Ldisplay = "NOT"
  var Ldiffusion = "Chaque lundi"
}

var MAdisplay = ""
var MAdiffusion = ""
if (day != 2) {
  var MAdisplay = "NOT"
  var MAdiffusion = "Chaque mardi"
}

var MEdisplay = ""
var MEdiffusion = ""
if (day != 3) {
  var MEdisplay = "NOT"
  var MEdiffusion = "Chaque mercredi"
}

var Jdisplay = ""
var Jdiffusion = ""
if (day != 4) {
  var Jdisplay = "NOT"
  var Jdiffusion = "Chaque jeudi"
}



export { Ldisplay, Ldiffusion }
export { MAdisplay, MAdiffusion }
export { MEdisplay, MEdiffusion }
export { Jdisplay, Jdiffusion }
export { Vdisplay, Vdiffusion }
export { LàVdiffusion, LàVdisplay }
export { Sdisplay, Sdiffusion }
export { SDdisplay, SDdiffusion }
export { Ddisplay, Ddiffusion }
