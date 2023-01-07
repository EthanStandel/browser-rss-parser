import { LàVdiffusion, SDdiffusion, jsonToListDisclosure } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const ArtdevivreEntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": "Les tendances",
    "URL": "https://www.europe1.fr/emissions/les-tendances",
    "image1": "./icons/WebsitesIcons/europe1.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "10min",
    "description": "Chaque jour à 11:45, Julia Vignali et Mélanie Gomez présentent les tendances santé, bien-être et art de vivre du moment.",
    "specification": LàVdiffusion
  },
  {
    "title": "À la carte",
    "URL": "https://www.francetvinfo.fr/replay-radio/a-la-carte/",
    "image1": iconsByNewsroom.Franceinfo.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "5min",
    "description": "À la carte vous est le rendez-vous qui vous fait découvrir toutes les week-ends à 14:23 et 16:56 des saveurs et des recettes de cuisine, par le chef Thierry Marx avec Bernard Thomasson.",
    "specification": SDdiffusion
  },
  {
    "title": "Les origines",
    "URL": "https://www.europe1.fr/emissions/les-origines",
    "image1": iconsByNewsroom.Europe1.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "6min",
    "description": "«&nbsp;Depuis quand, comment et surtout pourquoi a-t-on créé ça&nbsp;?&nbsp;» Vous ne vous êtes peut-être jamais posé la question. Qu’importe&nbsp;! Lui a la réponse… À 17:30, David&nbsp;Castello-Lopes remonte aux origines d’un objet de notre quotidien.",
    "specification": LàVdiffusion
  }
]

const ArtdevivreComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
      {Disc(<h5 className="bold">Les rendez-vous avec l'art de vivre</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(ArtdevivreEntries)}} />,'Artdevivre',ArtdevivreEntries.length,"discIDBlock")}
    </div>
  );
}

export default ArtdevivreComponent