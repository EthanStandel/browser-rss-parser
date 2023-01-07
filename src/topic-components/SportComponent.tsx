import { LàVdiffusion } from "./topicVAR";


const SportComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5>Rendez-vous avec le sport</h5>
      </div>
    <li className={"nList TVbanner "}>
      <a href="https://www.europe1.fr/emissions/ledito-sport" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="iconImgWrapper">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="iconImgWrapper double-img">
              <img src="./icons/WebsitesIcons/europe1.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">L'édito sport – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Virginie Phulpin livre chaque matin à 7:19 son point de vue tranché sur l'actualité sportive.
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
      <a href="https://www.franceinter.fr/emissions/histoires-de-sport" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="iconImgWrapper">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="iconImgWrapper double-img">
              <img src="./icons/WebsitesIcons/franceinter.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Esprit sport</h6>
              <div className="icon-footnote-container footnote">2 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 6:16, le sport, ses personnages, ses anecdotes et ses coulisses vus par Xavier Monferran.
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

export default SportComponent