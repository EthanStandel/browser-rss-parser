import {  jsonToListDisc, podcastDiffusion } from "../../topicVAR";
import { Disc } from '../../../components/gen/Disclosure_comp'
import iconsByNewsroom from "../../../resources/iconsByNewsroom.json"

const CultureMusicEntries = [
  {
    "title": "Au fil de l'actu",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/au-fil-de-l-actu",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "8min",
    "description": "Tous les jours à 7h20, un coup de fil avec un invité au coeur de l'actualité musicale française et internationale.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "La chronique d'Aliette de Laleu",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/la-chronique-d-aliette-de-laleu",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "À 7:50, focus sur une œuvre qui a changé la vie d’une compositrice d’hier ou d’aujourd'hui, qu’elle soit avant-gardiste ou jouée dans les plus grandes salles, qu’elle ait fait office de première fois pour les femmes, ou qu’elle ait simplement rendu célèbre sa créatrice.",
    "specification": podcastDiffusion([2])
  },
  {
    "title": "La chronique de Marjolaine Portier-Kaltenbach",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/la-chronique-de-marjolaine-portier-kaltenbach",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Disques, concerts, festivals : l'actualité du jazz vue par Marjolaine PK à 7:50.",
    "specification": podcastDiffusion([4])
  },
  {
    "title": "Histoires de musique",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/histoires-de-musique",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "10min",
    "description": "À 6:49, Marianne Vourch invite à partager un sujet d'Histoire, de Littérature ou d'Histoire des Arts en musique.",
    "specification": podcastDiffusion([7])
  }
]

const CultureMusiqueComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
      {Disc(<div><h5>Les rendez-vous musicaux</h5></div>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(CultureMusicEntries)}} />, 'CultureMusic', CultureMusicEntries.length, "discIDBlock")}
    </div>
  );
}

export default CultureMusiqueComponent