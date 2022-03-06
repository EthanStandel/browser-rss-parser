import moment from "moment";

const CustomCultureComponent = () => {
  return (
    <ul className='rss'>
    <li className="news-notif smallDesc">
      <a href="https://www.arte.tv/fr/videos/RC-014085/arte-journal/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="icon-image">
            <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
          </div>
          <div className="icon-image">
            <img src="./arte.png"/>
          </div>
          <div className="background-image">
            <img src="./capital_bgIMG.jpg"/>
          </div>
          <div className="item-container">
            <div className="item-F-line">
              <h6 className="item-title">Le journal du soir</h6>
              <div className="footnote item-publish-date">02/3</div>
            </div>
            
            <div className="item-infos">
              <div className="footnote item-publish-date">02/3</div>
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                Chaque jour à 19h45, la rédaction franco-allemande d’ARTE Journal propose une approche européenne et culturelle de l’actualité. 
                </div>
              </div>
            </div>
            <div className="item-infos2">
              <div className="footnote item-publish-date">{moment().format('MMMM Do YYYY')}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  );
}

export default CustomCultureComponent