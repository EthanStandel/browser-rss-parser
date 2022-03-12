const today = new Date();
let day = today.getDay()

let weekendDiffusion = ""
if (day > 5 || day < 1) {
  weekendDiffusion = "Du lundi au vendredi"
}


const SportComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous sportifs</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/ledito-sport" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">L'édito sport – Europe Matin</h6>
              <div className="icon-footnote-container footnote">3 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Virginie Phulpin livre chaque matin à 7:19 son point de vue tranché sur l'actualité sportive.
                </div>
              </div>
            </div>
            <div className="item-infos always">
              <div className="r2 item-publish-date">{weekendDiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  );
}

export default SportComponent