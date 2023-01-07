const EuropeComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec l'Europe</h5>
      </div>
    <li className="nList TVbanner">
      <a href="https://www.arte.tv/fr/videos/RC-014085/arte-journal/" target="_blank" rel="noreferrer">
        <div className="media">
        <div className="iconContainer">
            <div className="iconImgWrapper">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="iconImgWrapper double-img">
              <img src="./icons/WebsitesIcons/arte.png"/>
              <img src="./icons/WebsitesIcons/appletv.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">ARTE Journal</h6>
              <div className="icon-footnote-container footnote">25 min</div>
            </div>    
            <div className="descriptionLine">
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
    </div>
  );
}

export default EuropeComponent