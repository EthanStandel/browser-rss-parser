const PrInterComponent = () => {
  return (
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous à l'international</h5>
      </div>
       
    <li className="TVbanner nList">
      <a href="https://www.nbcnews.com/nightly-news-full-episodes" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icons-container">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./nbcnews.png"/>
              <img src="./appletv.png"/>
            </div>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">Nightly News</h6>
              <div className="footnote item-publish-date">20 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Coverage of the latest global and US breaking news stories by Lester Holt at 5:12 am (CET).
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://www.tagesschau.de/100sekunden/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icons-container">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./tagesschau.png"/>
              <img src="./appletv.png"/>
            </div>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">100 Sekunden</h6>
              <div className="footnote item-publish-date">2 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Nachrichten schauen auf tagesschau.de - die erste Adresse für Nachrichten und umfassende Berichte zu aktuellen Themen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li className="TVbanner nList">
      <a href="https://www.bbc.co.uk/programmes/p02cfn23" target="_blank" rel="noreferrer">
        <div className="media">
        <div className="icons-container">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./bbcnews.png"/>
              <img src="./appletv.png"/>
            </div>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">One-Minute World News</h6>
              <div className="footnote item-publish-date">1 min</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Watch the latest news summary from BBC World News. International news updated 24 hours a day.
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

export default PrInterComponent