import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const EcoComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec l'éco</h5>
      </div>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.europe1.fr/emissions/linterview-eco" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">L'interview éco – Europe Matin</h6>
              <div className="icon-footnote-container footnote">9 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque matin à 6:41, Dimitri Pavlenko reçoit un invité pour faire le point sur l'actualité économique.
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
      <a href="https://www.europe1.fr/emissions/L-edito-eco2" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">L'édito éco – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 7:15, Nicolas Bouzou et André Loesekrug-Pietri décryptent un fait de l'actualité économique.
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
      <a href="https://www.europe1.fr/emissions/la-bourse" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">Top à Wall Street – Europe Nuit</h6>
              <div className="icon-footnote-container footnote">2 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Wall Street, Cac 40, Didier Hameau fait le point chaque soir à 22:12 sur la situation de la Bourse.
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
    <li className="nList TVbanner">
      <a href="https://information.tv5monde.com/les-jt/eco?jt=jt_eco" target="_blank" rel="noreferrer">
        <div className="media">
         <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/tv5monde.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Le journal de l'économie</h6>
              <div className="footnote item-publish-date">4 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                À 17h chaque jour, un tour du monde de l'actualité économique par la rédaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.franceculture.fr/emissions/le-pourquoi-du-comment-economie-social" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">Le Pourquoi du comment : économie et social</h6>
              <div className="icon-footnote-container footnote">4 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                À 15h, Les chercheuses de l'Institut Veblen abordent avec pédagogie les questions que l’on se pose sur l'économie et le social sans oser les formuler.
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
  );
}

export default EcoComponent