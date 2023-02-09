import { useRef, useState } from 'react';
import './styles/App.scss';
import { Header } from './components/buildingBlocks/Header';
import Footer from './components/buildingBlocks/Footer';
import RssContent from './components/buildingBlocks/RssContent';
import rssFeeds from "./resources/rss_feeds.json";
import topicComponents from './topic-components/topicComponents';
import SubtopicComponents from './topic-components/subtopic-components/subtopicComponents';
import { BrowserUtils } from './utils/BrowserUtils';
import { Disc, DiscAdditonal } from './components/gen/Disclosure_comp';
import { DiscAllDisplay, disclosureDisplay } from './components/gen/disc_fct';
import { sidebarDisplayInverted } from './components/buildingBlocks/sidebar_fct';
import { defaultTheme } from "./ios/color-scheme-toggle";
import { displayPopUp } from './components/gen/PopUp_fct';
import { toggleElement, filterTopics, activeSVG } from './components/gen/fct';

// eslint-disable-next-line
function sum(array = Array(Number())) { // sum values in an array 
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
    _setSubtopicFilter(subtopicFilter);
    BrowserUtils.scrollToTop();
  }
  const [ topicFilter, _setTopicFilter ] = useState<keyof typeof topics>(initialTopicFilter);
  const setTopicFilter = (newTopicFilter: keyof typeof topics) => {
    BrowserUtils.scrollToTop();
    setSubtopicFilter(undefined);
    subtopicNavbarContainer.current?.scroll({ left: 0 });

    const query = `?topic=${encodeURIComponent(newTopicFilter)}`;
    // eslint-disable-next-line no-restricted-globals
    const path = `${location.protocol}//${location.host}${location.pathname}${query}`;
    window.history.pushState({ path }, "", path);
    _setTopicFilter(newTopicFilter);
  }

  const CustomTopicComponent = topicComponents[topicFilter] ?? "div";

  var nListDisplays = [
    "Presse étrangère",
    "Finance","Économie verte","Marketing","Management","Innovations","Retraites","Enchères","Media","Cryptomonnaies","Tourisme",
    "Rugby","Handball","Baseball","Équitation","Sports de combat","Nautisme","Escrime","Pétanque","Hockey","Handisport","US",
    "Photographie","Histoire","Musique","Architecture","Arts visuels","Mode",
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

  function nListYS(key: string) { // for the subtopics above, add a nList class
    let displayednList = false 
    for(let i = 0; i < nListDisplays.length; i++) {
      displayednList = key.includes(nListDisplays[i]) ? true : displayednList;
    }
    return displayednList
  }
  window.onload = () => {sidebarDisplayInverted(); disclosureDisplay("discHeader", topicFilter)} // show the sidebar on load

  return (
    <div id="App" className={topicFilter} data-color-scheme={defaultTheme()}>
      <div id="genPopUp" onClick={() => displayPopUp()}></div>
      {Header(["",""],
          <div className={"headerTitle"} onClick={() => { setTopicFilter(topicFilter); DiscAllDisplay("show")}}>
            <h6><em>nuntii</em></h6>
            <h6>{topicFilter}</h6>
          </div>,
      [""],
      "Top"
      )
      }
      <div id="uiSplitContainer">
        <div id="uiSplit-sidebar">
          <div className='uiSplit-sidebar-sbContainer'>
            <section id="sidebarTopics">
              <div id="sidebarTopics-header1">
                <div className="spacingLine sidebarSectionTitle">
                  <div className='r2 up bold'>Sujets & thèmes</div>
                  <svg viewBox="0 0 100 100" /* ratio of the svg file*/ id="topicsSearchMagnifyingGlass" className="clickVisible" height="13" fill="var(--secondaryLabel)" onClick={() => {toggleElement("topicsSearchDropdown"); activeSVG("topicsSearchMagnifyingGlass", "var(--secondaryLabel)", "var(--colorTheme)")}}>
                    <use xlinkHref="./genIcons/magnifying-glass.svg#path2"></use>
                  </svg>
                </div>
                
                <div id="topicsSearchDropdown">
                  <div className="CONTAINER">
                    <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="13" fill="var(--secondaryLabel)">
                      <use xlinkHref="./genIcons/magnifying-glass.svg#path2"></use>
                    </svg>
                    <input type="text" placeholder="Sujets, thèmes..." id="searchBox" onKeyUp={() => filterTopics()}></input>
                  </div>
                </div>
              </div>
              <ul className="sidebarTopics" id="topicsList">
                {selectableTopics.map(name => (
                  <li key={name} className={"h8 bold clickVisible " + (name === topicFilter ? `selected ${name}` : name)}>
                    {DiscAdditonal(
                      <button className="h8 bold " onClick={() => { setTopicFilter(name); DiscAllDisplay("show"); disclosureDisplay("discHeader", name)}}>{name}</button>, 
                      <div>
                        {Object.keys(topics[name].subtopics)
                          .filter(key => key !== "noSubtopic")
                          .map(key => (
                            <div key={key} className={`${key}-subtopic`}>
                              <button className={subtopicFilter === key ? `h8 selected ${key}` : 'h8'} onClick={() => {setTopicFilter(name); setSubtopicFilter(key); DiscAllDisplay("show")}}>{key}</button>
                            </div>
                          ))
                        }
                      </div>,
                      (name),
                      Object.keys(topics[name].subtopics).filter(key => key !== "noSubtopic").length
                    )}
                  </li>
                ))}
              </ul>
            </section>
            <section id="sidebarPlus">
              <div className='r2 up bold sidebarSectionTitle'>Plus de <em>nuntii</em></div>
            </section>
          </div>
        </div>
        <main className="Articles" id="uiSplit-main">
          <div className={"grid "+ topicFilter}>
            <section className="gridTopELement spacingLine" id="uiSplit-main-TopElement">
              <h4 className={"bold color gridTop-TopicTitle " + topicFilter} title="Voir tout le thème" onClick={() => setSubtopicFilter(undefined)}>{topicFilter}</h4>
              <div >
                <button className="r1" onClick={() => DiscAllDisplay()} id="DiscAllDisplay">Tout voir</button>
              </div>
            </section>
            <section className="LeftPodcastsColumn" id="uiSplit-main-LeftElement"><CustomTopicComponent /></section>
            <section className="RightRSSColumn" id="uiSplit-main-RightElement">
              {Object.entries(topics[topicFilter].subtopics)
                .sort(([ keyA ], [ keyB ]) => keyA === "noSubtopic" ? -1 : keyB === "noSubtopic" ? 1 : 0)
                .filter(([ key ]) => !subtopicFilter ? true : subtopicFilter === key)
                .map(([key, feeds]) => (
                  Disc(<h5 className="subtopic bold">{key !== "noSubtopic" && key}</h5>,<div> {(SubtopicComponents[key]) /* not working */ } <RssContent rssFeeds={feeds}/></div>, key, sum(feeds.map(value => value.articlesCount)), undefined , key + " ArticleSection " + String(sum(feeds.map(value => value.articlesCount)) > 5 ? " largeDisplay ": "") + String(nListYS(key) && " nList").replace("false", "")) 
                ))
              }
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;