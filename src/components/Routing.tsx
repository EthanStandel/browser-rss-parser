import { Switch, Route, Redirect, useParams } from "react-router-dom";
import Feeds from "../resources/rss_feeds.json";
import RssContent from "./RssContent";

const Routing = () => (
  <Switch>
    <Redirect key="redirect-route" to={`/feed/${encodeURIComponent(Feeds[0].name)}`} exact path="/" />
    <Route key="dynamic-feed" path="/feed/:feedName" component={DynamicFeedRoute} />
  </Switch>
);

const DynamicFeedRoute = () => {
  const { feedName } = useParams() as { feedName: string };
  return <RssContent rssFeeds={Feeds.filter(({ name }) => name === feedName)} />;
};

export default Routing;
