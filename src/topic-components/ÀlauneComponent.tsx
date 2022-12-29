import { LàVdiffusion, SDdiffusion, Ddiffusion } from "./topicVAR";
import { disclosureDisplay } from '../visualScripts';

const saints = [
  ["Jour de l'an","Basile","Geneviève","Odilon","Edouard","Mélaine","Raymond","Lucien","Alix","Guillaume","Pauline","Tatiana","Yvette","Nina","Rémi","Marcel","Roseline","Prisca","Marius","Sébastien","Agnès","Vincent","Banard","François de Sales","Conversion de Paul","Paule","Angèle","Thomas d'Aquin","Gildas","Martine","Marcelle"],
  ["Ella","Présentation","Blaise","Véronique","Agathe","Gaston","Eugènie","Jacqueline","Apolline","Arnaud","Notre Dame de Lourdes","Félix","Béatrice","Valentin","Claude","Julienne","Alexis","Bernadette","Gabin","Aimée","Damien","Isabelle","Lazare","Modeste","Roméo","Nestor","Honorine","Romain","Auguste"],
  ["Aubin","Charles le Bon","Guénolé","Casimir","Olive","Colette","Félicité","Jean de Dieu","Françoise","Vivien","Rosine","Justine","Rodrigue","Mathilde","Louise","Bénédicte","Patrice","Cyrille","Joseph","Printemps","Clémence","Léa","Victorien","Catherine","Annonciation","Larissa","Habib","Gontran","Gwladys","Amédée","Benjamin"],
  ["Hugues","Sandrine","Richard","Isidore","Irène","Marcellin","Jean-Baptiste de la Salle","Julie","Gautier","Fulbert","Stanislas","Jules","Ida","Maxime","Paterne","Benoît-Joseph","Anicet","Parfait","Emma","Odette","Anselme","Alexandre","Georges","Fidèle","Marc","Alida","Zita","Valérie","Catherine de Sienne","Robert"],
  ["Fête du travail","Boris","PhilippeJacques","Sylvain","Judith","Prudence","Gisèle","Armistice 1945","Pacôme","Solange","Estelle","Achille","Rolande","Matthias","Denise","Honoré","Pascal","Eric","Yves","Bernardin","Constantin","Emile","Didier","Donatien","Sophie","Bérenger","Augustin","Germain","Aymar","Ferdinand","Visitation de la Sainte Vierge"],
  ["Justin","Blandine","Kévin","Clotilde","Igor","Norbert","Gilbert","Médard","Diane","Landry","Barnabé","Guy","Antoine de Padoue","Elisée","Germaine","Jean François Régis","Hervé","Léonce","Romuald","Silvère","Eté","Alban","Audrey","Jean-Baptiste","Prosper","Anthelme","Fernand","Irénée","PierrePaul","Martial"],
  ["Thierry","Martinien","Thomas","Florent","Antoine","Mariette","Raoul","Thibault","Amandine","Ulrich","Benoît","Olivier","Henri et Joël","Fête Nationale","Donald","Notre Dame du Mont Carmel","Charlotte","Frédéric","Arsène","Marina","Victor","Marie Madeleine","Brigitte","Christine","Jacques","Anne et Joachin","Nathalie","Samson","Marthe","Juliette","Ignace de Loyola"],
  ["Alphonse","Julien Eymard","Lydie","Jean-Marie Vianney","Abel","Transfiguration","Gaétan","Dominique","Amour","Laurent","Claire","Clarisse","Hippolyte","Evrard","Assomption","Armel","Hyacinthe","Hélène","Jean Eudes","Bernard","Christophe","Fabrice","Rose de Lima","Barthélémy","Louis","Natacha","Monique","Augustin","Sabine","Fiacre","Aristide"],
  ["Gilles","Ingrid","Grégoire","Rosalie","Raïssa","Bertrand","Reine","Nativité","Alain","Inès","Adelphe","Apollinaire","Aimé","Croix Glorieuse","Roland","Edith","Renaud","Nadège","Emilie","Davy","Matthieu","Maurice","Automne","Thècle","Hermann","Côme et Damien","Vincent de Paul","Venceslas","Michel","Jérôme"],
  ["Thérèse de l'Enfant Jésus","Léger","Gérard","François d'Assise","Fleur","Bruno","Serge","Pélagie","Denis","Ghislain","Firmin","Wilfried","Géraud","Juste","Thérèse d'Avila","Edwige","Baudoin","Luc","René","Adeline","Céline","Elodie","Jean de Capistran","Florentin","Crépin","Dimitri","Emeline","Jude","Narcisse","Bienvenue","Quentin"],
  ["Toussaint","Défunts","Hubert","Charles","Sylvie","Bertille","Carine","Geoffroy","Théodore","Léon","Armistice 1918","Christian","Brice","Sidoine","Albert","Marguerite","Elisabeth","Aude","Tanguy","Edmond","Présence de Marie","Cécile","Clément","Flora","Catherine","Delphine","Sévrin","Jacques de la Marche","Saturnin","André"],
  ["Florence","Viviane","François Xavier","Barbara","Gérald","Nicolas","Ambroise","Immaculée Conception","Pierre Fourier","Romaric","Daniel","Jeanne-Françoise de Chantal","Lucie","Odile","Ninon","Alice","Gaël","Gatien","Urbain","Théophile","Hiver","Françoise Xavière","Armand","Adèle","Noël","Etienne","Jean","Innocents","David","Roger","Sylvestre"]
]

const ÀlauneEntries = [

  // always have a countryISOLabel by default once
  {
    "title": "Journal de 8h",
    "URL": "https://www.francetvinfo.fr/replay-jt/france-2/8-heures/",
    "image1": "./icons/WebsitesIcons/france2.png",
    "image2": "./icons/WebsitesIcons/appletv.png",
    "duration": "15min",
    "description": "Le JT de 8h propose des reportages et témoignages sur les événements de la nuit et donne l'agenda de la journée.",
    "countryISO3Label": "FRA",
  },
  {
    "title": "Réveil Courrier",
    "URL": "https://reveil.courrierinternational.com/#/",
    "image1": "./icons/WebsitesIcons/courrierinter-reveil.png",
    "image2": "",
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
    "specification": LàVdiffusion
  },
  {
    "title": "La question du jour",
    "URL": "https://www.franceculture.fr/emissions/la-question-du-jour",
    "image1": "./icons/WebsitesIcons/franceculture.png",
    "image2": "./icons/WebsitesIcons/applepodcasts.png",
    "duration": "8min",
    "description": "Pour enrichir et approfondir les questions d’actualité, Guillaume Erner pose au meilleur expert du sujet la Question du jour à 7:13.",
    "specification": LàVdiffusion
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

// used typeofDisclosure used for id and onClick must be the same
const ÀlauneComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
      <div className="Disclosure">
        <div className="intro" id="disclosureHeader News" onClick={() => disclosureDisplay("News")}> 
          <div>
            <div className="r2 secondaryColor">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'}) + " " + ((String(new Date().toLocaleDateString([], {month:'numeric'})) >= "10") ?? (String(new Date().toLocaleDateString([], {month:'numeric'})) <= "1") ? new Date().toLocaleDateString([], {year:'numeric'}) : "") + " • " + saints[Number(new Date().toLocaleDateString([], {month:'numeric'})) - 1][Number(new Date().toLocaleDateString([], {day:'numeric'})) - 1]}</div> 
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