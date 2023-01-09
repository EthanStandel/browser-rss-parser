import { Ddiffusion, jsonToListDisc } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const AutoEntries = [
  {
    "title": "Turbo",
    "URL": "https://www.6play.fr/turbo-p_884",
    "image1": iconsByNewsroom.M6.Turbo.iconImg,
    "image2": iconsByNewsroom.M6["6play"].iconImg,
    "duration": "1h",
    "description": "Votre magazine d'actualité automobile présenté par Dominique Chapatte : innovations, nouveautés, événéments... Toute l'auto est dans Turbo.",
    "specification": Ddiffusion
  }
]

const AutoComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec l'auto</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(AutoEntries)}} />,"Auto",AutoEntries.length,"discIDBlock")
  );
}

export default AutoComponent