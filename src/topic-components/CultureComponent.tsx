import { LàVdiffusion, LàVdisplay, SDdiffusion, SDdisplay, Ddiffusion, Ddisplay, Sdiffusion, Sdisplay, Jdiffusion, Jdisplay, Ldiffusion, Ldisplay, MAdiffusion, MAdisplay, MEdiffusion, MEdisplay, Vdiffusion, Vdisplay } from "./topicVAR";

const CultureComponent = () => {
  return (
   
    <ul className='rss-podcasts'>
      <div className="intro">
        <h5 className="bold">Rendez-vous avec la culture</h5>
      </div>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.europe1.fr/emissions/L-invite-culture" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/europe1.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">L'invité culture – Culture médias</h6>
                <div className="icon-footnote-container footnote">50 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                  Tous les jours à 10:10, Philippe Vandel reçoit un invité pour évoquer l'actualité culturelle.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
                <div className="r2 item-publish-date">{LàVdiffusion}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.franceculture.fr/emissions/le-pourquoi-du-comment-histoire" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/franceculture.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Le Pourquoi du comment : Histoire</h6>
                <div className="icon-footnote-container footnote">4 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                  À 9:53, toutes les réponses aux questions que l’on se pose en histoire sans oser les formuler.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.europe1.fr/emissions/dans-lintimite-de-lhistoire" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/europe1.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Dans l'intimité de l'Histoire – Historiquement vôtre</h6>
                <div className="icon-footnote-container footnote">7 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                  Au-delà des grandes dates, Clémentine Portier-Kaltenbach nous entraine dans l’intimité de l'Histoire à 16:43, à la découverte des petits secrets – souvent croustillants – des grands de ce monde.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Ddisplay}>
        <a href="https://www.fip.fr/emissions/certains-l-aiment-fip" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/fip.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Certains l'aiment Fip</h6>
                <div className="icon-footnote-container footnote">1 h</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    Chaque dimanche à 20h, FIP met le cinéma sur écoute et invite les auditeurs à une balade dans l'imaginaire musical d'un cinéaste, d'un genre ou d'un compositeur de musique de films.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ddiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Ddisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/la-correspondance-de-15h21" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">La correspondance de 15h21</h6>
                <div className="icon-footnote-container footnote">7 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    Chaque dimanche, Jean-Yves Larrouturou revient sur l'Histoire de la musique classique et baroque.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ddiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Vdisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/la-chronique-de-christian-merlin" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">La chronique de Christian Merlin</h6>
                <div className="icon-footnote-container footnote">5 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    À 7:50, l'idée est de partir d'un fait musical récent (un concert, une nomination, un départ, un débat, une polémique, etc.) et d'en tirer des enseignements pour mieux en comprendre les enjeux.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Vdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + MAdisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/la-chronique-d-aliette-de-laleu" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">La chronique d'Aliette de Laleu</h6>
                <div className="icon-footnote-container footnote">4 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    À 7:50, focus sur une œuvre qui a changé la vie d’une compositrice d’hier ou d’aujourd'hui, qu’elle soit avant-gardiste ou jouée dans les plus grandes salles, qu’elle ait fait office de première fois pour les femmes, ou qu’elle ait simplement rendu célèbre sa créatrice.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{MAdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Ldisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/la-chronique-d-antoine-pecqueur" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">La chronique d'Antoine Pecqueur</h6>
                <div className="icon-footnote-container footnote">3 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    À 7:50, décryptage des enjeux politiques et économiques de la musique et du monde de la culture, ainsi que des conséquences de la crise sanitaire sur le secteur et de sa place dans la campagne présidentielle.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ldiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Jdisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/la-chronique-de-marjolaine-portier-kaltenbach" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">La chronique de Marjolaine Portier-Kaltenbach</h6>
                <div className="icon-footnote-container footnote">3 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    Disques, concerts, festivals : l'actualité du jazz vue par Marjolaine PK à 7:50.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Jdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + Ddisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/histoires-de-musique" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Histoires de musique</h6>
                <div className="icon-footnote-container footnote">10 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    À 6:49, Marianne Vourch invite à partager un sujet d'Histoire, de Littérature ou d'Histoire des Arts en musique.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ddiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + LàVdisplay}>
        <a href="https://www.radiofrance.fr/francemusique/podcasts/au-fil-de-l-actu" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/francemusique.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Au fil de l'actu</h6>
                <div className="icon-footnote-container footnote">8 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    Tous les jours à 7h20, un coup de fil avec un invité au coeur de l'actualité musicale française et internationale.
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{LàVdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner " + MEdisplay}>
        <a href="https://www.franceinter.fr/emissions/bulles-de-bd" target="_blank" rel="noreferrer">
          <div className="media">
            <div className="iconContainer">
              <div className="icon-image">
                <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
              </div>
              <div className="icon-image double-img">
                <img src="./icons/WebsitesIcons/franceinter.png"/>
                <img src="./icons/WebsitesIcons/applepodcasts.png"/>
              </div>
            </div>
            <div className="itemContainer">
              <div className="item-F-line">
                <h6 className="titleLine">Bulles de BD</h6>
                <div className="icon-footnote-container footnote">4 min</div>
              </div>    
              <div className="descriptionLine">
                <div className="item-descriptionWrapper">
                  <div className="h8 item-description">
                    Le mercredi à 5:53, La bande dessinée débarque sur les ondes !
                  </div>
                </div>
              </div>
              <div className="descriptionLine always">
              <div className="r2 item-publish-date">{MEdiffusion}</div>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li className={"nList TVbanner "+ Ddisplay}>
      <a href="https://www.francetvinfo.fr/replay-radio/jeux-video/" target="_blank" rel="noreferrer">
        <div className="media">
          <div className="iconContainer">
            <div className="icon-image">
              <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
            </div>
            <div className="icon-image double-img">
              <img src="./icons/WebsitesIcons/franceinfo.jpeg"/>
              <img src="./icons/WebsitesIcons/applepodcasts.png"/>
            </div>
          </div>
          <div className="itemContainer">
            <div className="item-F-line">
              <h6 className="titleLine">Jeux vidéo</h6>
              <div className="icon-footnote-container footnote">2 min</div>
            </div>    
            <div className="descriptionLine">
              <div className="item-descriptionWrapper">
                <div className="h8 item-description">
                  Tous les week-ends, Jules De Kiss explore l'actualité du jeu et des gamers.
                </div>
              </div>
            </div>
            <div className="descriptionLine always">
              <div className="r2 item-publish-date">{Ddiffusion}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
    </ul>
  );
}

export default CultureComponent