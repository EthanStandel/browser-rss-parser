import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";
import { disclosureDisplay } from '../visualScripts';

const ÀlauneEntries = [
  {
    "title": "Journal de 8h",
    "URL": "https://www.francetvinfo.fr/replay-jt/france-2/8-heures/",
    "image1": "./icons/WebsitesIcons/france2.png",
    "image2": "./icons/WebsitesIcons/appletv.png",
    "duration": "15min",
    "description": "Le JT de 8h propose des reportages et témoignages sur les événements de la nuit et donne l'agenda de la journée."
  },
  {
    "title": "Réveil Courrier",
    "URL": "https://reveil.courrierinternational.com/#/",
    "image1": "./icons/WebsitesIcons/courrierinter-reveil.png",
    "image2": "./icons/WebsitesIcons/applenews.png",
    "duration": "25min",
    "description": "Chaque matin à 6h, une sélection des meilleurs articles de la presse étrangère, un résumé de l’actualité internationale utile pour bien commencer la journée."
  },
  {
    "title": "La météo",
    "URL": "https://www.rtl.fr/programmes/la-meteo-a-7-jours",
    "image1": "./icons/WebsitesIcons/rtl.png",
    "image2": "./icons/WebsitesIcons/applepodcasts.png",
    "duration": "2min",
    "description": "Tous les jours dès 4:37, retrouvez la météo avec le service météo de RTL."
  },
  {
    "title": "Le jour où",
    "URL": "https://www.europe1.fr/emissions/le-jour-ou",
    "image1": "./icons/WebsitesIcons/europe1.png",
    "image2": "./icons/WebsitesIcons/applepodcasts.png",
    "duration": "3min",
    "description": "Dans le jour où, tous les matins à 7:23, le passé éclaire le présent&nbsp;: grâce à ses archives, la rédaction d'Europe 1 fait le récit d'un événement relié à l'actualité.",
    "specification": "LàV"
  },
  {
    "title": "La question du jour",
    "URL": "https://www.franceculture.fr/emissions/la-question-du-jour",
    "image1": "./icons/WebsitesIcons/franceculture.png",
    "image2": "./icons/WebsitesIcons/applepodcasts.png",
    "duration": "8min",
    "description": "Pour enrichir et approfondir les questions d’actualité, Guillaume Erner pose au meilleur expert du sujet la Question du jour à 7:13.",
    "specification": "LàV"
  }
]

let out =""
for (let i of ÀlauneEntries) {
  out += `
  <li class="TVbanner ">
    <a href="${i.URL}" target="_blank" rel="noreferrer">
      <div class="media">
        <div class="iconContainer">
          <div class="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg" alt=""/>
          </div>
          <div class="icon-image double-img">
            <img src="${i.image1}"/>
            <img src="${i.image2}"/>
          </div>
        </div>
        <div class="itemContainer">
          <div class="justifiedTitle">
            <h6 class="titleLine">
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
          </div>
        </div>
      </div>
    </a>
  </li>
  `
}

// used typeofDisclosure used for id and onClick must be the same
const ÀlauneComponent = () => {

  return (
    <div className="LeftPodcastsColumn">
      <div className="Disclosure">
        <div className="intro" id="disclosureHeader News" onClick={() => disclosureDisplay("News")}> 
          <div>
            <div className="r2 secondaryColor">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'}) + " " + ((String(new Date().toLocaleDateString([], {month:'numeric'})) >= "10") ?? (String(new Date().toLocaleDateString([], {month:'numeric'})) <= "1") ? new Date().toLocaleDateString([], {year:'numeric'}) : "")}</div> 
            <h5 className="bold">Les rendez-vous à la une</h5>
          </div>
          <div className="chevron">
            <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
              <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
            </svg>
          </div>
        </div>
        <div id="disclosurePlus"> 
          <ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: out}} />
        </div>
      </div>
    </div>
  );
}

export default ÀlauneComponent