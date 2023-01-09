import { LàVdiffusion, jsonToListDisc } from "./topicVAR";
import iconsByNewsroom from "../resources/iconsByNewsroom.json";
import { Disc } from '../components/Disclosure_comp';

const SocieteEntries = [
  {
    "title": "Le dossier santé du jour",
    "URL": "https://www.europe1.fr/emissions/vite-fait-tres-bien-fait",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "30min",
    "description": "Chaque jour à 11:30, en compagnie de leurs invités, Mélanie&nbsp;Gomez et Julia&nbsp;Vignali, vous livrent leurs meilleurs conseils pour prendre soin de vous au quotidien.",
    "specification": LàVdiffusion
  }
]

const SocieteComponent = () => {
  return (
    Disc(<h5>Les rendez-vous de la société</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(SocieteEntries)}} />,"Societe",SocieteEntries.length,"discIDBlock")
  );
}

export default SocieteComponent