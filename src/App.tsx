import { useRef, useState } from 'react';
import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";
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

  return (
    <div className="App">
      <div className="header-mobile">
        <h4 className="logo-text">nuntium</h4>
      </div>
      <header>
        <div className="headerTitle">
          <h4 className="logo-text">nuntium</h4>
        </div>
        <div className="headerTopics">
          <ul className="topics-navbar r2 bold">
            {selectableTopics.map(name => (
              <li key={name} className={name}>
                <button className={name === topicFilter ? `selected ${name}` : name} onClick={() => setTopicFilter(name)}>{name}</button>
              </li>
            ))}
          </ul>
          {Object.keys(topics[topicFilter].subtopics).length > 1 &&
            <div className="subtopic-selection">
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
            </div>
          }
        </div>
      </header>
      <div className="body-container">
        <div className={topicFilter}>
          {<h3 className={"bold " + topicFilter}>{topicFilter}</h3>}
          {Object.entries(topics[topicFilter].subtopics)
            .sort(([ keyA ], [ keyB ]) => keyA === "noSubtopic" ? -1 : keyB === "noSubtopic" ? 1 : 0)
            .filter(([ key ]) => !subtopicFilter ? true : subtopicFilter === key)
            .map(([key, feeds]) => (
              <div key={key} className={`${key} section`}>
                <div id="external-script-element" />
                {key !== "noSubtopic" && <h4 className="subtopic">{key}</h4>}
                <RssContent rssFeeds={feeds} />
              </div>
            ))
          }
        </div>
      </div>
      <footer> 
      <div id="external-script-element"></div>
        <div className="footer-container">
          <div className="footer-header-app">
            <h5 className="logo-text">nuntium</h5>
            <div className="c1">Version bêta du projet nuntium, résumé des dernières actualités en France et dans le monde.</div>
          </div>
          <div className="footer-legal">
            <div className="c2 inline">2021 - France</div>
            <div className="c2 inline marginless">Créé par <a className="color" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</div>
            <div className="mini-links c2">
              <a href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a>
              <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
              <a href="http://atlasflux.saynete.net" target="_blank" rel="noreferrer">Atlas des flux</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
