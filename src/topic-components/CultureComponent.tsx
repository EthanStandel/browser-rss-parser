const CultureComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Émissions & podcasts</h5>
      </div>
      <li className="nList TVbanner">
      <a href="https://www.europe1.fr/emissions/L-invite-culture" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./europe1.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">L'invité culture – Culture médias</h6>
              <div className="icon-footnote-container footnote">▶ 50 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Tous les jours à 10:10, Philippe Vandel reçoit un invité pour évoquer l'actualité culturelle.
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

export default CultureComponent