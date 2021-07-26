import './App.scss';
import RssContent from './components/RssContent';
import rssFeeds from "./resources/rss_feeds.json";

const App = () => (
  <div className="App">
    <RssContent {...{ rssFeeds }} />
  </div>
);

export default App;
