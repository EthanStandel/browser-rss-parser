import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const IdeesComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous à l'international</h5>
      </div>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.europe1.fr/emissions/La-revue-de-presse-internationale" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./europe1.png"/>
              <img src="./applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">La revue de presse internationale – Europe Matin</h6>
              <div className="icon-footnote-container footnote">4 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque matin à 6:53, nos correspondants aux quatre coins du monde répondent à une question simple : Que se passe-t-il chez eux aujourd’hui ?
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
      <a href="https://www.europe1.fr/emissions/vincent-hervouet-vous-parle-international" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./europe1.png"/>
              <img src="./applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">L'édito international – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 7:12, Vincent Hervouët zoome sur un sujet qui fait l'actualité à travers le monde.
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
              <img src="./tv5monde.png"/>
              <img src="./appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Le journal international</h6>
              <div className="icon-footnote-container footnote">20 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                À 12h chaque jour, un tour du monde des dernières informations par la rédaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  );
}

export default IdeesComponent