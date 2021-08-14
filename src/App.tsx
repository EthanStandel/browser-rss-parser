import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const App = () => (
  <div className="App">
    <header>
      <h4 className="logo-text">nuntium</h4>   
    </header>
    <div className="body-container">
      <h3 className="bold webpage-title">À la une</h3>
      <RssContent {...{ rssFeeds }} />
    </div>
    <footer> 
      <div className="footer-container">
        <h5 className="logo-text">nuntium</h5>
        <div className="footnote v-separator">Version bêta du projet nuntium, pour un résumé des actualités intuitif, organisé de manière efficace en thèmes.</div>
        <div className="footnote inline">2021 - France</div>
        <div className="footnote inline">Créé par <a className="color-link" href="https://www.reddit.com/user/iKL3W" target="_blank" rel="noreferrer">u/iKL3W</a>, avec <a className="color-link" href="https://www.reddit.com/user/besthelloworld" target="_blank" rel="noreferrer">u/besthelloworld</a>.</div>
        <div className="footnote"></div>
        <div className="footnote inline h-separator"><b><a className="footnote-link" href="mailto:clement.krajecki@gmail.com?subject=nuntium&body=Bonjour!">Contact</a></b></div>
        <div className="footnote inline"><b><a className="footnote-link" href="https://github.com/EthanStandel/browser-rss-parser">Github</a></b></div>
      </div>
    </footer>
  </div>
);

export default App;
