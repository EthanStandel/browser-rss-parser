import { Ddiffusion, jsonToListDisclosure } from "./topicVAR";
import { disclosureDisplay } from '../components/disc_fct';
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
    <div className="LeftPodcastsColumn">
      <div className="Disclosure">
        <div className="intro" id="disclosureHeader Auto" onClick={() => disclosureDisplay("Auto")}> 
          <div> 
            <h5>Les rendez-vous avec l'auto</h5>
          </div>
          <div className="chevron">
            <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
              <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
            </svg>
          </div>
        </div>
        <div id="disclosurePlus"> 
          <ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(AutoEntries)}} />
        </div>
      </div>
    </div>
  );
}

export default AutoComponent