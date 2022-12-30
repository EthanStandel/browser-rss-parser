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

export function jsonToListDisclosure(array = Array()) {
  let out =""
  for (let i of array) {
    out += `
    <li class="TVbanner ">
      <a href="${i.URL}" target="_blank" rel="noreferrer">
        <div class="media">
          <div class="iconContainer">
            <div class="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg" alt=""/>
            </div>
            <div class="icon-image ${(i.image2 !== '') ? ' double-img' : ''}">
              <img src="${i.image1}"/>
              ${i.image2 == '' ? "" : "<img src=" + i.image2 + " />"}
            </div>
          </div>
          <div class="itemContainer">
            <div class="justifiedTitle">
              <h6 class="titleLine">
                ${((i?.countryISO3Label == "FRA") || (i?.countryISO3Label == undefined)) ? "" : "<div class='r4 LanguageLabel'>" + i.countryISO3Label + "</div>"}
                <div class="ItemTitle">
                ${i.title}
                </div>
              </h6>
              <div class="r2 articleDate">${i.duration}</div>
            </div>    
            <div class="descriptionLine">
              <div class="h8 item-description">
                ${i.description}
              </div>
              ${(i.specification !== undefined) ? "<div class='descriptionLine always'><div class='r2 item-publish-date'>" + i.specification + "</div> </div>" : ""}
            </div>
          </div>
        </div>
      </a>
    </li>
    `
  }
  return out 
}
