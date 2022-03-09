const IdeesComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Émissions & podcasts</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/La-revue-de-presse-internationale" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">La revue de presse internationale – Europe Matin</h6>
              <div className="icon-footnote-container footnote">▶ 4 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque matin à 6:53, nos correspondants aux quatre coins du monde répondent à une question simple : Que se passe-t-il chez eux aujourd’hui ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/vincent-hervouet-vous-parle-international" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">L'édito international – Europe Matin</h6>
              <div className="icon-footnote-container footnote">▶ 3 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Du lundi au vendredi à 7:12, Vincent Hervouët zoome sur un sujet qui fait l'actualité à travers le monde.
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