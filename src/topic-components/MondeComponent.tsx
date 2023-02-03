import {  jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/gen/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const MondeEntries = [
  {
    "title": "Revue de presse internationale",
    "URL": "https://www.franceculture.fr/emissions/revue-de-presse-internationale",
    "image1": "./icons/WebsitesIcons/franceculture.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "6min",
    "description": "Panorama de la presse du monde entier autour d'une actualité par Camille Magnard, du lundi au vendredi dans les Matins de France Culture à 7:35.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le rendez-vous de la presse étrangère",
    "URL": "https://www.europe1.fr/emissions/La-revue-de-presse-internationale",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "Chaque matin à 6:53, nos correspondants aux quatre coins du monde répondent à une question simple : Que se passe-t-il chez eux aujourd’hui ?",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "L'édito international",
    "URL": "https://www.europe1.fr/emissions/vincent-hervouet-vous-parle-international",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Chaque jour à 7:12, Vincent Hervouët zoome sur un sujet qui fait l'actualité à travers le monde.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le journal international", 
    "URL": "https://information.tv5monde.com/les-jt/eco?jt=jt_eco",
    "image1": iconsByNewsroom.TV5Monde.iconImg,
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "20min",
    "description": "À 12h chaque jour, un tour du monde des dernières informations par la rédaction."
  }
]

const MondeComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec le monde</h5>,<ul className='rss nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(MondeEntries)}} />,"Monde",MondeEntries.length,"discIDBlock")
  );
}

export default MondeComponent