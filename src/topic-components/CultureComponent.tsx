import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const CultureComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec la culture</h5>
      </div>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.europe1.fr/emissions/L-invite-culture" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="icons-container">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./europe1.png"/>
                <img src="./applepodcasts.png"/>
              </div>
            </div>
            <div className="item-container">
              <div className="item-F-line">
                <h6 className="item-title">L'invité culture – Culture médias</h6>
                <div className="icon-footnote-container footnote">50 min</div>
              </div>    
              <div className="item-infos">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                  Tous les jours à 10:10, Philippe Vandel reçoit un invité pour évoquer l'actualité culturelle.
                  </div>
                </div>
              </div>
              <div className="item-infos always">
                <div className="r2 item-publish-date">{LàVdiffusion}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.europe1.fr/emissions/dans-lintimite-de-lhistoire" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="icons-container">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./europe1.png"/>
                <img src="./applepodcasts.png"/>
              </div>
            </div>
            <div className="item-container">
              <div className="item-F-line">
                <h6 className="item-title">Dans l'intimité de l'Histoire – Historiquement vôtre</h6>
                <div className="icon-footnote-container footnote">7 min</div>
              </div>    
              <div className="item-infos">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                  Au-delà des grandes dates, Clémentine Portier-Kaltenbach nous entraine dans l’intimité de l'Histoire à 16:43, à la découverte des petits secrets – souvent croustillants – des grands de ce monde.
                  </div>
                </div>
              </div>
              <div className="item-infos always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default CultureComponent