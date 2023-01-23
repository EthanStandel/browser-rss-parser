import {  jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const ScienceEntries = [
  {
    "title": "L'innovation du jour", 
    "URL": "https://www.europe1.fr/emissions/L-innovation-du-jour",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Anicet Mbida nous livre chaque matin à 6:49 ce qui se fait de mieux en matière d'innovation.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le Pourquoi du comment : science",
    "URL": "https://www.franceculture.fr/emissions/le-pourquoi-du-comment-science",
    "image1": iconsByNewsroom.FranceCulture.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "13min",
    "description": "Bruno David aborde avec pédagogie les questions que l’on se pose en sciences sans oser les formuler à 16:55.",
    "specification": podcastDiffusion([6])
  }
]

const ScienceComponent = () => {
  return (
    Disc(<h5>Les rendez-vous internationaux</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(ScienceEntries)}} />,"Science",ScienceEntries.length,"discIDBlock")
  );
}

export default ScienceComponent