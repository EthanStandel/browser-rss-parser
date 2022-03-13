import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay } from "./topicVAR";

const IdeesComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec les idées</h5>
      </div>
    <li className={"nList TVbanner " + LàVdisplay}>
      <a href="https://www.europe1.fr/emissions/telescopages" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">Télescopages – Culture médias</h6>
              <div className="icon-footnote-container footnote">6 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 10:03, Bruno Donnet regarde la télévision, écoute la radio et scrute les journaux ainsi que les réseaux sociaux pour livrer ses téléscopages.
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
      <a href="https://www.europe1.fr/emissions/delice-in-extremiste" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">Papilles de la nation – Historiquement vôtre</h6>
              <div className="icon-footnote-container footnote">5 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                La France est LE pays de la gastronomie, et Olivier Poels vous le prouve tous les jours à 17:45 en vous emmenant à la découverte d'un plat emblématique de l'Hexagone.
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