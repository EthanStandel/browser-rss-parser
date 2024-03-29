import {  jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/gen/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const EcoEntries = [
  {
    "title": "L’interview éco",
    "URL": "https://www.europe1.fr/emissions/linterview-eco",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "9min",
    "description": "Chaque matin à 6:41, Dimitri Pavlenko reçoit un invité pour faire le point sur l'actualité économique.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le Pourquoi du comment&nbsp;: économie et social",
    "URL": "https://www.franceculture.fr/emissions/le-pourquoi-du-comment-economie-social",
    "image1": iconsByNewsroom.FranceCulture.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "4min",
    "description": "À 15h, Les chercheuses de l'Institut Veblen abordent avec pédagogie les questions que l’on se pose sur l'économie et le social sans oser les formuler.",
    "specification": podcastDiffusion([5])
  },
  {
    "title": "L’édito éco",
    "URL": "https://www.europe1.fr/emissions/L-edito-eco2",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "3min",
    "description": "Chaque jour à 7:15, Nicolas Bouzou et André Loesekrug-Pietri décryptent un fait de l'actualité économique.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Top à Wall Street",
    "URL": "https://www.europe1.fr/emissions/la-bourse",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "2min",
    "description": "Wall Street, Cac 40, Didier Hameau fait le point chaque soir à 22:12 sur la situation de la Bourse.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "Le journal de l’économie",
    "URL": "https://www.europe1.fr/emissions/la-bourse",
    "image1": iconsByNewsroom.TV5Monde.iconImg,
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "4min",
    "description": "À 17h chaque jour, un tour du monde de l'actualité économique par la rédaction."
  }
]

const EcoComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec l'éco</h5>,<ul className='rss nList nListInblock' dangerouslySetInnerHTML={{ __html: jsonToListDisc(EcoEntries)}} />,"Eco",EcoEntries.length,"discIDBlock")
  );
}

export default EcoComponent