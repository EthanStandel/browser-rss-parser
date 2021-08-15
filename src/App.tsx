import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const App = () => (
  <div className="App">
    <h4 className="header-mobile logo-text">nuntium</h4>
    <header>
      <div className="header-l1">
      <h4 className="logo-text">nuntium</h4>
      </div>
      <div className="header-l2">
      <ul className="topics-navbar r2 bold">
        <li className="sports">Sports</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
        <li className="culture">Culture</li>
      </ul> 
      </div>
    </header>
    <div className="body-container">
      <h3 className="bold webpage-title">À la une</h3>
      <RssContent {...{ rssFeeds }} />
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
          <div className="mini-links inline footnote bold">
            <a href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a>
            <a href="https://github.com/EthanStandel/browser-rss-parser" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
