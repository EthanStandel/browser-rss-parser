import { jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/gen/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const ArtdevivreEntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": iconsByNewsroom.Europe1.LesTendances.name,
    "URL": "https://www.europe1.fr/emissions/les-tendances",
    "image1": iconsByNewsroom.Europe1.LesTendances.iconImg,
    "image2": iconsByNewsroom.Europe1.iconImg,
    "duration": "10min",
    "description": "Chaque jour à 11:45, Julia Vignali et Mélanie Gomez présentent les tendances santé, bien-être et art de vivre du moment.",
    "specification": podcastDiffusion([1,2,3,4,5])
  },
  {
    "title": "À la carte",
    "URL": "https://www.francetvinfo.fr/replay-radio/a-la-carte/",
    "image1": iconsByNewsroom.Francetv.Franceinfo.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "5min",
    "description": "À la carte vous est le rendez-vous qui vous fait découvrir toutes les week-ends à 14:23 et 16:56 des saveurs et des recettes de cuisine, par le chef Thierry Marx avec Bernard Thomasson.",
    "specification": podcastDiffusion([7,6])
  },
  {
    "title": iconsByNewsroom.Europe1.LesOrigines.name,
    "URL": "https://www.europe1.fr/emissions/les-origines",
    "image1": iconsByNewsroom.Europe1.LesOrigines.iconImg,
    "image2": iconsByNewsroom.Europe1.iconImg,
    "duration": "6min",
    "description": "«&nbsp;Depuis quand, comment et surtout pourquoi a-t-on créé ça&nbsp;?&nbsp;» Vous ne vous êtes peut-être jamais posé la question. Qu’importe&nbsp;! Lui a la réponse… À 17:30, David&nbsp;Castello-Lopes remonte aux origines d’un objet de notre quotidien.",
    "specification": podcastDiffusion([1,2,3,4,5])
  }
]

const ArtdevivreComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec l'art de vivre</h5>,<ul className='rss nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(ArtdevivreEntries)}} />,'Artdevivre',ArtdevivreEntries.length,"discIDBlock")
  );
}

export default ArtdevivreComponent