import { LàVdiffusion, jsonToListDisclosure } from "./topicVAR";
import { disclosureDisplay } from '../visualScripts';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const PlaneteEntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": "Toujours en train",
    "URL": "https://shows.acast.com/toujours-en-train",
    "image1": "./icons/WebsitesIcons/toujoursentrain.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "15min",
    "description": "Marine Baousson, oujours en train, a le temps de se poser plein de questions&nbsp;: est ce que ça se recycle, un train&nbsp;? Est-ce que la SNCF fait des efforts pour réduire ses émissions carbone&nbsp;? Est-ce qu’on fait attention aux animaux qui vivent aux abords des voies&nbsp;?",
  }
]

const PlaneteComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
      <div className="Disclosure">
        <div className="intro" id="disclosureHeader Planete" onClick={() => disclosureDisplay("Planete")}> 
          <div> 
            <h5 className="bold">Les rendez-vous avec la planète</h5>
          </div>
          <div className="chevron">
            <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
              <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
            </svg>
          </div>
        </div>
        <div id="disclosurePlus"> 
          <ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(PlaneteEntries)}} />
        </div>
      </div>
    </div>
  );
}

export default PlaneteComponent