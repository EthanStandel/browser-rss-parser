const today = new Date();
var day = today.getDay()

export let LàVdiffusion = ""
if ((day === 6) || (day === 0)) {
  LàVdiffusion = "Du lundi au vendredi"
}

export let SDdiffusion = ""
if (!((day === 6) || (day === 0))) {
  SDdiffusion = "Samedi et dimanche"
}

export let Ddiffusion = ""
if (day !== 0) {
  Ddiffusion = "Chaque dimanche"
}

export let Sdiffusion = ""
if (day !== 6) {
  Sdiffusion = "Chaque samedi"
}

export let Vdiffusion = ""
if (day !== 5) {
  Vdiffusion = "Chaque vendredi"
}

export let Ldiffusion = ""
if (day !== 1) {
  Ldiffusion = "Chaque lundi"
}

export let MAdiffusion = ""
if (day !== 2) {
  MAdiffusion = "Chaque mardi"
}

export let MEdiffusion = ""
if (day !== 3) {
  MEdiffusion = "Chaque mercredi"
}

export let Jdiffusion = ""
if (day !== 4) {
  Jdiffusion = "Chaque jeudi"
}

export function jsonToListDisc(array = []) {
  let out =""
  for (let i of array) {
    out += `
    <li class="nListFreeDesc">
      <a href="${i.URL}" target="_blank" rel="noreferrer">
        <div class="media">
          <div class="iconContainer">
            <div class="iconImgWrapper ${(i.image2 !== '') ? ' double-img' : ''}">
              <img src="${i.image1}"/>
              ${i.image2 === '' ? "" : "<img src=" + i.image2 + " />"}
            </div>
          </div>
          <div class="itemContainer">
            <div class="justifiedTitle spacingLine">
              <h6 class="titleLine">
                ${((i?.countryISO3Label === "FRA") || (i?.countryISO3Label === undefined)) ? "" : "<div class='r4 LanguageLabel'>" + i.countryISO3Label + "</div>"}
                <div class="itemTitle">
                ${i.title}
                </div>
              </h6>
              <div class="r2 up articleDate">${i.duration}</div>
            </div>    
            <div class="descriptionLine">
              ${((i.specification !== undefined) && (i.specification !== "")) ? "": "<div class='h8 item-description'>" + i.description + "</div>"}
              ${((i.specification === "") || (i.specification === undefined))  ? "" : "<div class='descriptionLine always'><div class='r2 up item-publish-date'>" + i.specification + "</div> </div>"}
            </div>
          </div>
        </div>
      </a>
    </li>
    `
  }
  return out 
}