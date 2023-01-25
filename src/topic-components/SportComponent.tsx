import {  jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/gen/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const SportEntries = [
  {
    "title": "L'édito sport",
    "URL": "https://www.europe1.fr/emissions/ledito-sport",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Virginie Phulpin livre chaque matin à 7:19 son point de vue tranché sur l'actualité sportive.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Esprit sport",
    "URL": "https://www.franceinter.fr/emissions/histoires-de-sport",
    "image1": iconsByNewsroom.FranceInter.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "2min",
    "description": "Chaque jour à 6:16, le sport, ses personnages, ses anecdotes et ses coulisses vus par Xavier Monferran.",
    "specification": podcastDiffusion([1,2,3,4,5])
  }
]

const SportComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec le sport</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(SportEntries)}} />,"Societe",SportEntries.length,"discIDBlock")
  );
}

export default SportComponent