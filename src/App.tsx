import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const App = () => (
  <div className="App">
    <h1 className="webpage-title">À la une</h1>
    <RssContent {...{ rssFeeds }} />
  </div>
);

export default App;
