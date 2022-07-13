import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const ÀlauneComponent = () => {
  return (
  <div className="LeftPodcastsColumn">
    <div className="r2 secondaryColor">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'})}</div>
    <ul className='rss-podcasts'> 
    <div className="intro">
        <h5 className="bold">Rendez-vous avec l'info</h5>
      </div>      
    <li className="nList TVbanner ">
      <a href="https://www.francetvinfo.fr/replay-jt/france-2/8-heures/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/france2.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">JT de 8h - Télématin</h6>
              <div className="footnote item-publish-date">15 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="h8 item-description">
              Le JT de 8h propose des reportages et témoignages sur les événements de la nuit et donne l'agenda de la journée.
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://reveil.courrierinternational.com/#/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/courrierinter-reveil.png"/>
              <img src="./icons/WebsitesIcons/applenews.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Réveil Courrier</h6>
              <div className="footnote item-publish-date">25 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque matin à 6h, une sélection des meilleurs articles de la presse étrangère, un résumé de l’actualité internationale utile pour bien commencer la journée. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://www.rtl.fr/programmes/la-meteo-a-7-jours" target="_blank" rel="noreferrer">
        <div className="media">
        <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/rtl.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">La météo</h6>
              <div className="footnote item-publish-date">2 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Tous les jours dès 4:37, retrouvez la météo avec le service météo de RTL.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.europe1.fr/emissions/le-jour-ou" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/europe1.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Le jour où – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Dans le jour où, tous les matins à 7:23, le passé éclaire le présent&nbsp;: grâce à ses archives, la rédaction d'Europe 1 fait le récit d'un événement relié à l'actualité.
                </div>
              </div>
            </div>
            <div className="descriptionLine always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.franceculture.fr/emissions/la-question-du-jour" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/franceculture.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">La Question du jour</h6>
              <div className="icon-footnote-container footnote">8 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Pour enrichir et approfondir les questions d’actualité, Guillaume Erner pose au meilleur expert du sujet la Question du jour à 7:13.
                </div>
              </div>
            </div>
            <div className="descriptionLine always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  </div>
  );
}

export default ÀlauneComponent