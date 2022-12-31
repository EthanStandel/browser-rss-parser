const today = new Date();
var day = today.getDay()

let LàVdiffusion = ""
if ((day === 6) || (day === 0)) {
  LàVdiffusion = "Du lundi au vendredi"
}

let SDdiffusion = ""
if (!((day === 6) || (day === 0))) {
  SDdiffusion = "Samedi et dimanche"
}

let Ddiffusion = ""
if (day !== 0) {
  Ddiffusion = "Chaque dimanche"
}

let Sdiffusion = ""
if (day !== 6) {
  Sdiffusion = "Chaque samedi"
}

let Vdiffusion = ""
if (day !== 5) {
  Vdiffusion = "Chaque vendredi"
}

let Ldiffusion = ""
if (day !== 1) {
  Ldiffusion = "Chaque lundi"
}

let MAdiffusion = ""
if (day !== 2) {
  MAdiffusion = "Chaque mardi"
}

let MEdiffusion = ""
if (day !== 3) {
  MEdiffusion = "Chaque mercredi"
}

let Jdiffusion = ""
if (day !== 4) {
  Jdiffusion = "Chaque jeudi"
}

export { Ldiffusion, MAdiffusion, MEdiffusion, Jdiffusion, Vdiffusion, LàVdiffusion, Sdiffusion, SDdiffusion, Ddiffusion }

export function jsonToListDisclosure(array = []) {
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
              ${i.image2 === '' ? "" : "<img src=" + i.image2 + " />"}
            </div>
          </div>
          <div class="itemContainer">
            <div class="justifiedTitle">
              <h6 class="titleLine">
                ${((i?.countryISO3Label === "FRA") || (i?.countryISO3Label === undefined)) ? "" : "<div class='r4 LanguageLabel'>" + i.countryISO3Label + "</div>"}
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
