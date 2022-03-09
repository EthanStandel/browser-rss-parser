const IdeesComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Émissions & podcasts</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/telescopages" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">Télescopages – Culture médias</h6>
              <div className="icon-footnote-container footnote">▶ 6 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 10:03, Bruno Donnet regarde la télévision, écoute la radio et scrute les journaux ainsi que les réseaux sociaux pour livrer ses téléscopages.
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