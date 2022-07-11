import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const AutoComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous sportifs</h5>
      </div>
    <li className={"nList TVbanner " + Ddisplay}>
      <a href="https://www.6play.fr/turbo-p_884" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/turbo.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Turbo</h6>
              <div className="icon-footnote-container footnote">1 h</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Votre magazine d'actualité automobile présenté par Dominique Chapatte : innovations, nouveautés, événéments... Toute l'auto est dans Turbo. 
                </div>
              </div>
            </div>
            <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ddiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
    </div>
  );
}

export default AutoComponent