import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const App = () => (
  <div className="App">
    <h1>À la une</h1>
    <RssContent {...{ rssFeeds }} />
  </div>
);

export default App;
