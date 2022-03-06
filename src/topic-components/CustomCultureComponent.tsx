const CustomCultureComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="r2">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'})}</div>
       <h5 className="bold">Émissions & podcasts</h5>
    <li className="TVbanner news-notif">
      <a href="https://www.arte.tv/fr/videos/RC-014085/arte-journal/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./arte.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">ARTE Journal</h6>
              <div className="icon-footnote-container footnote">▶ 15 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 19:45, la rédaction franco-allemande d’ARTE Journal propose une approche européenne et culturelle de l’actualité. 
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

export default CustomCultureComponent