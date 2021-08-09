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
    <footer> <div className="footer-container">
    <h5 className="logo-text">nuntium</h5>   <div className="footnote">nuntium est le lecteur d'actualités le plus simple. Les actualités sont organisées par thème et les plus récentes sont mises en avant. Suivre les nouvelles en France et dans le monde entier n'a jamais été ausi facile.</div></div></footer>
  </div>
);

export default App;
