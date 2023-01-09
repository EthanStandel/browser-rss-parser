import { useRef, useState } from 'react';
import './App.scss';
import Footer from './components/Footer'
import HappyBday from './components/HappyBirthday';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";
import topicComponents from './topic-components/topicComponents';
import SubtopicComponents from './topic-components/subtopic-components/subtopicComponents';
import { BrowserUtils } from './utils/BrowserUtils';
import { Disc } from './components/Disclosure_comp';
import { DiscAllDisplay } from './components/disc_fct';

function sum(array = Array()) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
   sum += array[i];
  }
  return sum
}

const { topics } = rssFeeds;
const initialTopicFilter = (new URLSearchParams(document.location.search).get("topic") ?? "À la une") as keyof typeof topics;
const selectableTopics = Object.entries(rssFeeds.topics).map(([key]) => key) as Array<keyof typeof topics>;

const App = () => {
  const [ subtopicFilter, _setSubtopicFilter ] = useState<string | undefined>(undefined);
  const subtopicNavbarContainer = useRef<HTMLUListElement>(null);
  const setSubtopicFilter = (subtopicFilter: string | undefined) => {
    BrowserUtils.scrollToTop();
    _setSubtopicFilter(subtopicFilter);
  }
  const [ topicFilter, _setTopicFilter ] = useState<keyof typeof topics>(initialTopicFilter);
  const setTopicFilter = (newTopicFilter: keyof typeof topics) => {
    BrowserUtils.scrollToTop();
    setSubtopicFilter(undefined);
    subtopicNavbarContainer.current?.scroll({ left: 0 });
    const shouldUnfilter = newTopicFilter === topicFilter;
    const query = shouldUnfilter ? "" : `?topic=${encodeURIComponent(newTopicFilter)}`;
    // eslint-disable-next-line no-restricted-globals
    const path = `${location.protocol}//${location.host}${location.pathname}${query}`;
    window.history.pushState({ path }, "", path);
    _setTopicFilter(shouldUnfilter ? "À la une": newTopicFilter);
  }
  const CustomTopicComponent = topicComponents[topicFilter] ?? "div";

  var nListDisplays = [
    "Presse étrangère",
    "Finance","Économie verte","Marketing","Management","Innovations","Retraites","Enchères","Media","Cryptomonnaies","Tourisme",
    "Rugby","Handball","Baseball","Équitation","Sports de combat","Nautisme","Escrime","Pétanque","Hockey","Handisport","US",
    "Photographie","Histoire","Musique","Patrimoine","Arts visuels","Mode",
    "Royautés","Luxe","Sexe & relations","Maison & jardin","Insolite & curiosité",
    "Pays ibériques","Suisse","Balkans","Italie",
    "Paix & sécurité","Écologie politique",
    "Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Bretagne","Centre-Val de Loire","Corse","Grand Est","Guadeloupe","Guyane","Hauts-de-France","Île-de-France","Martinique","Mayotte","Normandie","Nouvelle-Aquitaine","Nouvelle-Calédonie","Occitanie","Pays de la Loire","Polynésie","Provence-Alpes-Côte d'Azur","Réunion","Saint-Pierre-et-Miquelon","Wallis-et-Futuna",
    "Action sociale","Handicap","Discrimination","Droit","Faits divers",
    "Déchets",
    "Astronomie",
    "Deeptech","GAFAM","geeks","Ordinateurs","Big Data",
    "Bien-être","Engagement","Fin de vie","vivre-ensemble","Opinions","Bioéthique"
  ]

  function nListYS(key : string) { // for the subtopics above, add a nList class
    var displayednList = false 
    for(let i = 0; i < nListDisplays.length; i++) {
      var displayednList = key.includes(nListDisplays[i]) ? true : displayednList;
    }
    return displayednList
  }

  return (
    <div className={topicFilter + " App"}>
      <div className="header-mobile">
        <h5 className="logo-text" onClick={() => setTopicFilter(topicFilter)}>nuntii</h5>
      </div>
      <header className="headerTopics">
          <div id="headerFirstLine">
            <div className="headerTitle">
              <h5 className="logo-text" onClick={() => { setTopicFilter(topicFilter); DiscAllDisplay("show")}}>nuntii</h5>
            </div>
            <nav>
              <ul className="topics-navbar r1 bold">
                {selectableTopics.map(name => (
                  <li key={name} className={name}>
                    <button className={name === topicFilter ? `selected ${name}` : name} onClick={() => { setTopicFilter(name); DiscAllDisplay("show")}}>{name}</button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div id="headerSecondLine">
            {Object.keys(topics[topicFilter].subtopics).length > 1 &&
              <nav className="subtopic-selection">
                <ul ref={subtopicNavbarContainer} className={"topics-navbar r1 " + topicFilter}>
                  <li className="all-subtopic">
                    <button className={!subtopicFilter ? "selected" : ""} onClick={() => setSubtopicFilter(undefined)}>
                      Tout
                    </button>
                  </li>
                  {Object.keys(topics[topicFilter].subtopics)
                    .filter(key => key !== "noSubtopic")
                    .map(key => (
                      <li key={key} className={`${key}-subtopic`}>
                        <button className={subtopicFilter === key ? `selected ${key}` : ""} onClick={() => setSubtopicFilter(key)}>
                          {key}
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            }
          </div>
      </header>
      <main className="Articles">
        <div className={"grid "+ topicFilter}>
          <div className="gridTopELement">
            <h4 className={"bold color Htopic " + topicFilter}>{topicFilter}</h4>
            <div >
              <button className="r1" onClick={() => DiscAllDisplay()} id="DiscAllDisplay">Tout voir</button>
            </div>
            
          </div>
          <div className="LeftPodcastsColumn" ><CustomTopicComponent /></div>
          <div className="RightRSSColumn">
            {Object.entries(topics[topicFilter].subtopics)
              .sort(([ keyA ], [ keyB ]) => keyA === "noSubtopic" ? -1 : keyB === "noSubtopic" ? 1 : 0)
              .filter(([ key ]) => !subtopicFilter ? true : subtopicFilter === key)
              .map(([key, feeds]) => (
                Disc(<h5 className="subtopic bold">{key !== "noSubtopic" && key}</h5>,<div> {(SubtopicComponents[key]) /* not working */ }  <RssContent rssFeeds={feeds} /></div>, key, sum(feeds.map(value => value.articlesCount)), undefined , key + " ArticleSection " + String((sum(feeds.map(value => value.articlesCount)) > 5) && " largeDisplay ").replace("false", "") + String(nListYS(key) && " nList").replace("false", "")) 
              ))
            }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
