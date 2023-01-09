import { LàVdiffusion, Sdiffusion, jsonToListDisc} from "./topicVAR";
import { Disc } from '../components/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const IdeesEntries = [
  {
    "title": "Télescopages",
    "URL": "https://www.europe1.fr/emissions/telescopages",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "6min",
    "description": "Chaque jour à 10:03, Bruno Donnet regarde la télévision, écoute la radio et scrute les journaux ainsi que les réseaux sociaux pour livrer ses téléscopages.",
    "specification": LàVdiffusion
  },
  {
    "title": "Papilles de la nation",
    "URL": "https://www.europe1.fr/emissions/delice-in-extremiste",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "5min",
    "description": "La France est LE pays de la gastronomie, et Olivier Poels vous le prouve tous les jours à 17:45 en vous emmenant à la découverte d'un plat emblématique de l'Hexagone.",
    "specification": LàVdiffusion
  },
  {
    "title": "Le Pourquoi du comment : Philo",
    "URL": "https://www.franceculture.fr/emissions/le-pourquoi-du-comment-philo",
    "image1": iconsByNewsroom.FranceCulture.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Frédéric Worms aborde à 10:52 avec pédagogie les questions que l’on se pose en philo sans oser les formuler.",
    "specification": LàVdiffusion
  },
  {
    "title": "La revue de presse des idées",
    "URL": "https://www.franceculture.fr/emissions/la-revue-de-presse-des-idees",
    "image1": iconsByNewsroom.FranceCulture.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "Chaque samedi dans la matinale à 8:45, l'exploration des tribunes et opinions dans la presse française et internationale.",
    "specification": Sdiffusion
  }
]

const IdeesComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec les idées</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(IdeesEntries)}} />,"Idees",IdeesEntries.length,"discIDBlock")
  );
}

export default IdeesComponent