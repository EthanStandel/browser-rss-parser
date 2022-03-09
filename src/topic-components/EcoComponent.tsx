const EcoComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Émissions & podcasts</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/linterview-eco" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">L'interview éco – Europe Matin</h6>
              <div className="icon-footnote-container footnote">▶ 9 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque matin à 6:41, Dimitri Pavlenko reçoit un invité pour faire le point sur l'actualité économique.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/L-edito-eco2" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">L'édito éco – Europe Matin</h6>
              <div className="icon-footnote-container footnote">▶ 3 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 7:15, Nicolas Bouzou et André Loesekrug-Pietri décryptent un fait de l'actualité économique.
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

export default EcoComponent