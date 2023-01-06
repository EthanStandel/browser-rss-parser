import { LàVdiffusion, jsonToListDisclosure } from "./topicVAR";
import { disclosureDisplay } from '../components/disc_fct';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const SocieteEntries = [

  // always have a countryISOLabel by default once
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
    <div className="LeftPodcastsColumn">
      <div className="Disclosure">
        <div className="intro" id="disclosureHeader Sante" onClick={() => disclosureDisplay("Sante")}> 
          <div> 
            <h5 className="bold">Les rendez-vous sociétaux</h5>
          </div>
          <div className="chevron">
            <svg viewBox="0 0 100 58.353394" /* ratio of the svg file*/ width="12">
              <use xlinkHref="./genIcons/chevron_down.svg#path2"></use>
            </svg>
          </div>
        </div>
        <div id="disclosurePlus"> 
          <ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(SocieteEntries)}} />
        </div>
      </div>
    </div>
  );
}

export default SocieteComponent