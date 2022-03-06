const CustomÀlauneComponent = () => {
  return (
    <ul className='rss'>
       <div className="r2">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'})}</div>
    <li className="TVbanner news-notif">
      <a href="https://www.francetvinfo.fr/replay-jt/france-2/8-heures/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./france2.png"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">JT de 8h</h6>
              <div className="footnote item-publish-date">{new Date().toLocaleDateString([], {weekday:'long', day:'numeric', month: 'long'})}</div>
            </div>    
            <div className="item-infos">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Le JT de 8h propose des reportages et témoignages sur les événements de la nuit et donne l'agenda de la journée.
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

export default CustomÀlauneComponent