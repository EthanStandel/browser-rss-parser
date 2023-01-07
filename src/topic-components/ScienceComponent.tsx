import { LàVdiffusion, Sdiffusion } from "./topicVAR";

const IdeesComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5>Rendez-vous avec la science</h5>
      </div>
    <li className={"nList TVbanner "}>
      <a href="https://www.europe1.fr/emissions/L-innovation-du-jour" target="_blank" rel="noreferrer">
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
              <h6 className="titleLine">L'innovation du jour – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Anicet Mbida nous livre chaque matin à 6:49 ce qui se fait de mieux en matière d'innovation.
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
      <a href="https://www.franceculture.fr/emissions/le-pourquoi-du-comment-science" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="iconImgWrapper">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="iconImgWrapper double-img">
              <img src="./icons/WebsitesIcons/franceculture.png"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Le Pourquoi du comment : science</h6>
              <div className="icon-footnote-container footnote">13 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Bruno David aborde avec pédagogie les questions que l’on se pose en sciences sans oser les formuler à 16:55.
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

export default IdeesComponent