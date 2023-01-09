import { jsonToListDisc } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const EuropeEntries = [
  {
    "title": "ARTE Journal",
    "URL": "https://www.arte.tv/fr/videos/RC-014085/arte-journal/",
    "image1": iconsByNewsroom.Arte['ARTE Journal'].iconImg,
    "image2": iconsByNewsroom.Arte.iconImg,
    "duration": "25 min",
    "description": "Chaque jour à 19:45, la rédaction franco-allemande d’ARTE Journal propose une approche européenne et culturelle de l’actualité."
  }
]

const EuropeComponent = () => {
  return (
    Disc(<h5>Les rendez-vous européens</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(EuropeEntries)}} />,"Europe",EuropeEntries.length,"discIDBlock")
  );
}

export default EuropeComponent