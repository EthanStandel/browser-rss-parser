const today = new Date();
let day = today.getDay()

let weekendDiffusion = ""
if (day > 5 || day < 1) {
  weekendDiffusion = "Du lundi au vendredi"
}

const ArtdevivreComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec l'art de vivre</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/les-origines" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">Les origines – Historiquement vôtre</h6>
              <div className="icon-footnote-container footnote">6 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                «&nbsp;Depuis quand, comment et surtout pourquoi a-t-on créé ça&nbsp;?&nbsp;» Vous ne vous êtes peut-être jamais posé la question. Qu’importe&nbsp;! Lui a la réponse… À 17:30, David&nbsp;Castello-Lopes remonte aux origines d’un objet de notre quotidien.
                </div><div className="h8 item-description">
                
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
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/les-tendances" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">Les tendances – Bienfait pour vous</h6>
              <div className="icon-footnote-container footnote">10 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 11:45, Julia&nbsp;Vignali et Mélanie&nbsp;Gomez présentent les tendances santé, bien-être et art de vivre du moment.
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
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/vite-fait-tres-bien-fait" target="_blank" rel="noreferrer">
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
              <h6 className="item-title">Le dossier santé du jour – Bienfait pour vous</h6>
              <div className="icon-footnote-container footnote">30 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 11:30, en compagnie de leurs invités, Mélanie&nbsp;Gomez et Julia&nbsp;Vignali, vous livrent leurs meilleurs conseils pour prendre soin de vous au quotidien.
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

export default ArtdevivreComponent