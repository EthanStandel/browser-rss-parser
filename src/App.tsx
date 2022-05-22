import { useRef, useState } from 'react';
import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";
import topicComponents from './topic-components/topicComponents';
import { BrowserUtils } from './utils/BrowserUtils';

const { topics } = rssFeeds;
const initialTopicFilter = (new URLSearchParams(document.location.search)
  .get("topic") ?? "À la une") as keyof typeof topics;
const selectableTopics = Object.entries(rssFeeds.topics)
  .map(([key]) => key) as Array<keyof typeof topics>;

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

  return (
    <div className={topicFilter + " App"}>
      <div className="header-mobile">
        <h4 className="logo-text" onClick={() => setTopicFilter(topicFilter)}>nuntium</h4>
      </div>
      <header>
        <div className="headerTitle">
          <h4 className="logo-text" onClick={() => setTopicFilter(topicFilter)}>nuntium</h4>
        </div>
        <div className="headerTopics">
          <nav>
            <ul className="topics-navbar r2 bold">
              {selectableTopics.map(name => (
                <li key={name} className={name}>
                  <button className={name === topicFilter ? `selected ${name}` : name} onClick={() => setTopicFilter(name)}>{name}</button>
                </li>
              ))}
            </ul>
          </nav>
          {Object.keys(topics[topicFilter].subtopics).length > 1 &&
            <div className="subtopic-selection">
              <nav>
                <ul ref={subtopicNavbarContainer} className={"topics-navbar r2 " + topicFilter}>
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
            </div>
          }
        </div>
      </header>
      <main className="Articles">
        <div className={topicFilter}>
          <h2 className={"bold " + topicFilter}>{topicFilter}</h2>
          <div className="LeftPodcastsColumn">
          <CustomTopicComponent />
          </div>
          <div className="RightRSSColumn">
          {Object.entries(topics[topicFilter].subtopics)
            .sort(([ keyA ], [ keyB ]) => keyA === "noSubtopic" ? -1 : keyB === "noSubtopic" ? 1 : 0)
            .filter(([ key ]) => !subtopicFilter ? true : subtopicFilter === key)
            .map(([key, feeds]) => (
              <div key={key} className={`${key} section`}>
                <div id="external-script-element" />
                <section>
                {key !== "noSubtopic" && <h3 className="subtopic bold">{key}</h3>}
                <RssContent rssFeeds={feeds} />
                </section>
              </div>
            ))
          }
          </div>
        </div>
      </main>
      <footer> 
        <div className="footer-container">
          <section className="footer-header-app">
            <h1 className="logo-text" onClick={() => setTopicFilter(topicFilter)}>nuntium</h1>
            <p className="h7">
              Une application pour faire un tour des actualités locales, nationales et internationales avec des articles de rédactions françaises (et francophones) et étrangères. 
            </p>
            <p className="h7">
              Chaque sujet est traité en profondeur par les rédactions spécialisées pour une information de qualité. Les balados et autres émissions sont disponibles pour suivre l'actualité du globe à toute heure de la journée et de la nuit.
            </p>
          </section>
          <section className="footer-legal">
            <div className="websiteInfo">
              <p className="footnote inline">© 2021-{new Date().toLocaleDateString([], {year:'numeric'})} — France.</p>
              <p className="footnote inline">Créé par <a className="color" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</p>
              <p className="footnote inline"><em>nuntium</em> n'est affilié ni à <a href="https://www.apple.com" target="_blank" rel="noreferrer">Apple</a>, ni à une quelconque rédaction.</p>
            </div>
            <nav className="mini-links footnote bold">
              <a href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a>
              <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
              <a href="http://atlasflux.saynete.net" target="_blank" rel="noreferrer">Atlas des flux</a>
              <a href="https://www.iptc.org/std/NewsCodes/treeview/mediatopic/mediatopic-fr.html" target="_blank" rel="noreferrer">NewsCodes</a>
              <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">React</a>
            </nav>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default App;
