import { LàVdiffusion, Ddiffusion, Jdiffusion, MAdiffusion, MEdiffusion, jsonToListDisc } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json"

const CultureEntries = [
  {
    "title": "L'invité culture",
    "URL": "https://www.europe1.fr/emissions/L-invite-culture",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "30min",
    "description": "Tous les jours à 10:30, Philippe Vandel reçoit un invité pour évoquer l'actualité culturelle.",
    "specification": LàVdiffusion
  },
  {
    "title": "Certains l'aiment Fip",
    "URL": "https://www.fip.fr/emissions/certains-l-aiment-fip",
    "image1": "./icons/WebsitesIcons/fip.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "1h",
    "description": "Chaque dimanche à 20h, FIP met le cinéma sur écoute et invite les auditeurs à une balade dans l'imaginaire musical d'un cinéaste, d'un genre ou d'un compositeur de musique de films.",
    "specification": Ddiffusion
  }
]

const CultureMusicEntries = [
  {
    "title": "Au fil de l'actu",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/au-fil-de-l-actu",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "8min",
    "description": "Tous les jours à 7h20, un coup de fil avec un invité au coeur de l'actualité musicale française et internationale.",
    "specification": LàVdiffusion
  },
  {
    "title": "La chronique d'Aliette de Laleu",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/la-chronique-d-aliette-de-laleu",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "À 7:50, focus sur une œuvre qui a changé la vie d’une compositrice d’hier ou d’aujourd'hui, qu’elle soit avant-gardiste ou jouée dans les plus grandes salles, qu’elle ait fait office de première fois pour les femmes, ou qu’elle ait simplement rendu célèbre sa créatrice.",
    "specification": MAdiffusion
  },
  {
    "title": "La chronique de Marjolaine Portier-Kaltenbach",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/la-chronique-de-marjolaine-portier-kaltenbach",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Disques, concerts, festivals : l'actualité du jazz vue par Marjolaine PK à 7:50.",
    "specification": Jdiffusion
  },
  {
    "title": "Histoires de musique",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/histoires-de-musique",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "10min",
    "description": "À 6:49, Marianne Vourch invite à partager un sujet d'Histoire, de Littérature ou d'Histoire des Arts en musique.",
    "specification": Ddiffusion
  }
]

const CultureBDEntries = [
  {
    "title": "Bulles de BD",
    "URL": "https://www.franceinter.fr/emissions/bulles-de-bd",
    "image1": "./icons/WebsitesIcons/franceinter.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "Le mercredi à 5:53, La bande dessinée débarque sur les ondes !",
    "specification": MEdiffusion
  }
]

const CultureHistoryEntries = [

  {
    "title": "Le Pourquoi du comment : Histoire",
    "URL": "https://www.franceculture.fr/emissions/le-pourquoi-du-comment-histoire",
    "image1": "./icons/WebsitesIcons/franceculture.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "À 9:53, toutes les réponses aux questions que l’on se pose en histoire sans oser les formuler.",
    "specification": LàVdiffusion
  },
  {
    "title": "Dans l'intimité de l'Histoire",
    "URL": "https://www.europe1.fr/emissions/dans-lintimite-de-lhistoire",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "7min",
    "description": "Au-delà des grandes dates, Clémentine Portier-Kaltenbach nous entraine dans l’intimité de l'Histoire à 16:43, à la découverte des petits secrets – souvent croustillants – des grands de ce monde.",
    "specification": LàVdiffusion
  },
  {
    "title": "La correspondance de 15h21",
    "URL": "https://www.radiofrance.fr/francemusique/podcasts/la-correspondance-de-15h21",
    "image1": "./icons/WebsitesIcons/francemusique.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "7min",
    "description": "Chaque dimanche, Jean-Yves Larrouturou revient sur l'Histoire de la musique classique et baroque.",
    "specification": Ddiffusion
  }
]

const CultureComponent = () => {
  return (   
    Disc(<div><h5>Les rendez-vous culturels</h5></div>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(CultureEntries)}} />, 'Culture', CultureEntries.length, "discIDBlock"),
    Disc(<div><h5>Les rendez-vous avec l'Histoire</h5></div>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(CultureHistoryEntries)}} />, 'CultureHistory', CultureHistoryEntries.length, "discIDBlock"),
    Disc(<div><h5>Les rendez-vous musicaux</h5></div>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(CultureMusicEntries)}} />, 'CultureMusic', CultureMusicEntries.length, "discIDBlock"),
    Disc(<div><h5>Les rendez-vous de la BD</h5></div>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(CultureBDEntries)}} />, 'CultureBD', CultureBDEntries.length, "discIDBlock")
  );
}

export default CultureComponent