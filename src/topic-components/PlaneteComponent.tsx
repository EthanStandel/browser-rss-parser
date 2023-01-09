import { jsonToListDisc } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const PlaneteEntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": "Toujours en train",
    "URL": "https://shows.acast.com/toujours-en-train",
    "image1": "./icons/WebsitesIcons/toujoursentrain.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "15min",
    "description": "Marine Baousson, toujours en train, a le temps de se poser plein de questions&nbsp;: est ce que ça se recycle, un train&nbsp;? Est-ce que la SNCF fait des efforts pour réduire ses émissions carbone&nbsp;? Est-ce qu’on fait attention aux animaux qui vivent aux abords des voies&nbsp;?",
    "specification": "2 épisodes par semaine"
  }
]

const PlaneteComponent = () => {
  return (
    Disc(<h5>Les rendez-vous avec la planète</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisc(PlaneteEntries)}} />,"Planete",PlaneteEntries.length,"discIDBlock")
  );
}

export default PlaneteComponent