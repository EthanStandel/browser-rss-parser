const today = new Date();
let day = today.getDay()

var LàVdiffusion = ""
if ((day == 6) || (day == 0)) {
  var LàVdiffusion = "Du lundi au vendredi"
}

var SDdiffusion = ""
if (!((day == 6) || (day == 0))) {
  var SDdiffusion = "Samedi et dimanche"
}

var Ddiffusion = ""
if (day != 0) {
  var Ddiffusion = "Chaque dimanche"
}

var Sdiffusion = ""
if (day != 6) {
  var Sdiffusion = "Chaque samedi"
}

var Vdiffusion = ""
if (day != 5) {
  var Vdiffusion = "Chaque vendredi"
}

var Ldiffusion = ""
if (day != 1) {
  var Ldiffusion = "Chaque lundi"
}

var MAdiffusion = ""
if (day != 2) {
  var MAdiffusion = "Chaque mardi"
}

var MEdiffusion = ""
if (day != 3) {
  var MEdiffusion = "Chaque mercredi"
}

var Jdiffusion = ""
if (day != 4) {
  var Jdiffusion = "Chaque jeudi"
}

export { Ldiffusion, MAdiffusion, MEdiffusion, Jdiffusion, Vdiffusion, LàVdiffusion, Sdiffusion, SDdiffusion, Ddiffusion }
