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
  </div>
);

export default App;
