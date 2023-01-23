import {  jsonToListDisc, podcastDiffusion} from "./topicVAR";
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
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Papilles de la nation",
    "URL": "https://www.europe1.fr/emissions/delice-in-extremiste",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "5min",
    "description": "La France est LE pays de la gastronomie, et Olivier Poels vous le prouve tous les jours à 17:45 en vous emmenant à la découverte d'un plat emblématique de l'Hexagone.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le Pourquoi du comment : Philo",
    "URL": "https://www.franceculture.fr/emissions/le-pourquoi-du-comment-philo",
    "image1": iconsByNewsroom.FranceCulture.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Frédéric Worms aborde à 10:52 avec pédagogie les questions que l’on se pose en philo sans oser les formuler.",
    "specification": podcastDiffusion([1,2,3,4,5])
  }
]

const IdeesComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec les idées</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(IdeesEntries)}} />,"Idees",IdeesEntries.length,"discIDBlock")
  );
}

export default IdeesComponent