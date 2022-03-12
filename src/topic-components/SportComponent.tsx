const today = new Date();
let day = today.getDay()

let LàVdiffusion = ""
let LàVdisplay =""
if ((day > 5) || (day = 0)) {
  LàVdiffusion = "Du lundi au vendredi"
  LàVdisplay = "NOT"
}

// test for display only on some days of the week
let SDdisplay = ""
let SDdiffusion = ""
if ((day != 6) || (day = 0)) {
  SDdisplay = "NOT"
  SDdiffusion = "Samedi et dimanche"
}


const SportComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous sportifs</h5>
      </div>
    <li className={"nList TVbanner " + LàVdisplay}>
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
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  );
}

export default SportComponent