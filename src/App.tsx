import { useState } from 'react';
import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const { topics } = rssFeeds;
const initialTopicFilter = (new URLSearchParams(document.location.search)
  .get("topic") ?? "noTopic") as keyof typeof topics;
const selectableTopics = Object.entries(rssFeeds.topics)
  .filter(([key]) => key !== "noTopic")
  .map(([key]) => key) as Array<keyof typeof topics>;

const App = () => {
  const [ topicFilter, _setTopicFilter ] = useState<keyof typeof topics>(initialTopicFilter);
  const setTopicFilter = (newTopicFilter: keyof typeof topics) => {
    const shouldUnfilter = newTopicFilter === topicFilter;
    const query = shouldUnfilter ? "" : `?topic=${encodeURIComponent(newTopicFilter)}`;
    // eslint-disable-next-line no-restricted-globals
    const path = `${location.protocol}//${location.host}${location.pathname}${query}`;
    window.history.pushState({ path }, "", path);
    _setTopicFilter(shouldUnfilter ? "noTopic": newTopicFilter);
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
        </div>
      </header>
      <div className="body-container">
        <h3 className="bold">À la une</h3>
        {topicFilter !== "noTopic" && <h3>{topicFilter}</h3>}
        <RssContent {...{ rssFeeds: topics[topicFilter] }} />
      </div>
      <footer> 
        <div className="footer-container">
          <div className="footer-header-app">
            <h5 className="logo-text">nuntium</h5>
            <div className="footnote">Version bêta du projet nuntium, pour un résumé des actualités intuitif, organisé de manière efficace en thèmes.</div>
          </div>
          <div className="footer-legal">
            <div className="footnote inline">2021 - France</div>
            <div className="footnote inline marginless">Créé par <a className="color" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</div>
            <div className="mini-links footnote">
              <a href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a>
              <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
