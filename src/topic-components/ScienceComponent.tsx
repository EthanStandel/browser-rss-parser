import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const IdeesComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec la science</h5>
      </div>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.europe1.fr/emissions/L-innovation-du-jour" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">L'innovation du jour – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Anicet Mbida nous livre chaque matin à 6:49 ce qui se fait de mieux en matière d'innovation.
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

export default IdeesComponent