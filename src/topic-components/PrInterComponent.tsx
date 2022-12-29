import { LàVdiffusion, SDdiffusion, Ddiffusion, Sdiffusion } from "./topicVAR";

const PrInterComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous à l'international</h5>
      </div>
       
    <li className="TVbanner nList">
      <a href="https://www.nbcnews.com/nightly-news-full-episodes" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/nbcnews.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Nightly News</h6>
              <div className="footnote item-publish-date">20 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Coverage of the latest global and US breaking news stories by Lester Holt at 5:12 am (CET).
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://www.tagesschau.de/100sekunden/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/tagesschau.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">100 Sekunden</h6>
              <div className="footnote item-publish-date">2 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Nachrichten schauen auf tagesschau.de - die erste Adresse für Nachrichten und umfassende Berichte zu aktuellen Themen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://www.bbc.co.uk/programmes/p02cfn23" target="_blank" rel="noreferrer">
        <div className="media">
        <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/bbcnews.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">One-Minute World News</h6>
              <div className="footnote item-publish-date">1 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Watch the latest news summary from BBC World News. International news updated 24 hours a day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className={"nList TVbanner "}>
      <a href="https://ici.radio-canada.ca/ohdio/balados/302/nouvelles-info-matin-canada-monde-politique" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/radiocanada.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">À la une : Canada, monde et politique</h6>
              <div className="icon-footnote-container footnote">23 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Mathieu Belhumeur est entouré de ses collaborateurs pour présenter les principales nouvelles d'ici et d'ailleurs. Le tout sur un ton convivial. Un condensé de l'actualité pour bien démarrer la journée.
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
    <li className={"nList TVbanner "}>
      <a href="https://www.franceculture.fr/emissions/revue-de-presse-internationale" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">La Revue de presse internationale</h6>
              <div className="icon-footnote-container footnote">6 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Panorama de la presse du monde entier autour d'une actualité par Camille Magnard, du lundi au vendredi dans les Matins de France Culture à 7:35.
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
    <li className={"nList TVbanner " }>
      <a href="https://www.franceculture.fr/emissions/la-fabrique-mediatique" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">Le rendez-vous de la presse étrangère</h6>
              <div className="icon-footnote-container footnote">25 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                À 7:33, des journalistes correspondants de la presse internationale croisent leurs regards sur un fait d’actualité marquant de la semaine : l’information vue par ceux qui nous l’ont racontée.
                </div>
              </div>
            </div>
            <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Sdiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
    </div>
  );
}

export default PrInterComponent