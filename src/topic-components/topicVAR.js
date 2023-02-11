const today = new Date();
let day = today.getDay();

if (day === 0) { // Sunday is 7 instead of 0
  day = 7
}

export function podcastDiffusion(array = [Number()]) {
  const weekdays = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
  let diffusionDays = []
  for (let i of array.sort((a,b)=>a-b).filter(i => i !== day)) {
    diffusionDays.push(weekdays[i-1])
  }

  return ((diffusionDays.length !== 0) && array.every(diffusionDate => diffusionDate !== day)) 
    ? (((String(array).includes(String([1,2,3,4,5])) ? 'En semaine' : undefined) || (String(array).includes(String([6,7])) ? 'En fin de semaine' : undefined)) ?? "Chaque " + diffusionDays.join(', ').replace(/,(?=[^,]+$)/, ' et'))
    : ""
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