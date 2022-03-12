const today = new Date();
let day = today.getDay()

let weekendDiffusion = ""
if (day != 0) {
  weekendDiffusion = "Chaque dimanche"
}


const AutoComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous sportifs</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.6play.fr/turbo-p_884" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icons-container">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./turbo.png"/>
              <img src="./appletv.png"/>
            </div>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">Turbo</h6>
              <div className="icon-footnote-container footnote">1 h</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Votre magazine d'actualité automobile présenté par Dominique Chapatte : innovations, nouveautés, événéments... Toute l'auto est dans Turbo. 
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

export default AutoComponent