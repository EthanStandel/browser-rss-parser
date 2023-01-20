import { useRef, useState } from 'react';
import './App.scss';
import Footer from './components/Footer'
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";
import topicComponents from './topic-components/topicComponents';
import SubtopicComponents from './topic-components/subtopic-components/subtopicComponents';
import { BrowserUtils } from './utils/BrowserUtils';
import { Disc, DiscAdditonal } from './components/Disclosure_comp';
import { DiscAllDisplay, disclosureDisplay } from './components/disc_fct';
import { sidebarDisplayInverted } from './components/sidebar_fct';
import { defaultTheme, inverseTheme } from "./ios/color-scheme-toggle";
import { displayPopUp } from './components/PopUp_fct';

// eslint-disable-next-line
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
      <div className="header-mobile">
        <h5 className="logo-text" onClick={() => setTopicFilter(topicFilter)}>nuntii</h5>
      </div>
      <header>
        <div id="headerFirstLine" className="spacingLine noGapSL">
          <div className="spacingLine" id="largeHeader">            
            <div className='spacingLineLeft spacingLine noGapSL'>
              <button title="Afficher/cacher la barre latérale" className="squareButton20" onClick={() => sidebarDisplayInverted()} id="sidebarDisplayInverted">
                <svg viewBox="0 0 126.80602 100" /* ratio of the svg file*/ height="20">
                  <use xlinkHref="./genIcons/sidebar.svg#path2"></use>
                </svg>
              </button>
              <button title="Informations" className="squareButton20 blockedButton" id="nuntiiInfo">
                <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                  <use xlinkHref="./genIcons/info.svg#path2"></use>
                </svg>
              </button>
            </div>
            <div className="headerTitle" onClick={() => { setTopicFilter(topicFilter); DiscAllDisplay("show")}}>
              <h6><em>nuntii</em></h6>
              <h6>{topicFilter}</h6>
            </div>
            <div className='spacingLineRight spacingLine noGapSL'>
              <a title="Envoyer un retour" href="mailto:clement.krajecki@gmail.com?subject=nuntii&body=Bonjour!">
                <button className="squareButton20" id="sendFeedback">
                  <svg viewBox="0 0 100 94.147377" /* ratio of the svg file*/ height="20">
                    <use xlinkHref="./genIcons/feedback.svg#path2"></use>
                  </svg>
                </button>
              </a>
              <button title="Inverser le thème" className="squareButton20" onClick={() => inverseTheme()} id={"colorTheme"}>
                <svg viewBox="0 0 100 100" /* ratio of the svg file*/ height="20">
                  <use xlinkHref={"./genIcons/" + (defaultTheme() === "light" ? "moon" : "sun") + ".svg#path2"}></use>
                </svg>
              </button>
            </div>
          </div>
          <nav id="oldTopicnavbar">
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
                <button className={!subtopicFilter ? "selected" : ""} onClick={() => {setSubtopicFilter(undefined)}}>
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
      <div id="uiSplitContainer">
        <div id="uiSplit-sidebar">
          <div className='uiSplit-sidebar-sbContainer'>
            <section id="sidebarTopics">
              <div className='r2 up bold sidebarSectionTitle'>Sujets & thèmes</div>
              <ul className="sidebarTopics">
                {selectableTopics.map(name => (
                  <li key={name} className={"h8 bold " + (name === topicFilter ? `selected ${name}` : name)}>
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
              <h4 className={"bold color gridTop-TopicTitle " + topicFilter}>{topicFilter}</h4>
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
                  Disc(<h5 className="subtopic bold">{key !== "noSubtopic" && key}</h5>,<div> {(SubtopicComponents[key]) /* not working */ } <RssContent rssFeeds={feeds}/></div>, key, sum(feeds.map(value => value.articlesCount)), undefined , key + " ArticleSection " + String(sum(feeds.map(value => value.articlesCount)) ? " largeDisplay ": "") + String(nListYS(key) && " nList").replace("false", "")) 
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