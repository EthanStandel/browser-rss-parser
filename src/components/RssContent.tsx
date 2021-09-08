import React from "react";
import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";
import axios from "axios";
import { useAsync } from "@react-hookz/web";
import { Spinner } from "./Spinner";

export interface RssFeedSource {
  url: string;
  name?: string;
  count?: number;
  iconImg?: string;
  backgroundImg?: string;
  encodedTitles?: boolean;
  subtopic?: string;
}

interface ParsedRssItem {
  link: string;
  image?: string;
  title?: string;
  pubDate?: string; // RFC2822 date
  description?: string;
  "media:content"?: {
    url?: string;
  }
  enclosure?: {
    type?: string;
  }
}

interface ParsedRssFeed {
  rss: {
    channel: {
      item: Array<ParsedRssItem>;
    }
  }
};

export interface RssContentProps {
  rssFeeds: Array<RssFeedSource>;
};

// This is bad but the whole point of this is to not stand up a server
const openCorsProxy = "https://api.codetabs.com/v1/proxy?quest=";

export const RssContent: React.FC<RssContentProps> = ({ rssFeeds }) => {
  const [{ status, result }] = useAsync(async (rssFeeds) => (
    (await Promise.all(rssFeeds.map(feed => axios(openCorsProxy + feed.url, { responseType: "text" }))))
    .map(({ data }) => XmlParser.parse(data) as ParsedRssFeed)
    .map((feed, index) => feed.rss.channel.item
      .map(item => ({
        source: rssFeeds[index],
        item,
        date: item.pubDate ? DateTime.fromRFC2822(item.pubDate) : undefined 
      }))
    )
    .reduce((all, curr, index) => all.concat(
      typeof rssFeeds[index].count === "undefined"
        ? curr
        : curr.slice(0, rssFeeds[index].count)
    ), [])
    .sort((a, b) => {
      // Sort items with subtopics at the bottom
      if (!a.source.subtopic && b.source.subtopic) {
        return -1;
      } else if (!b.source.subtopic && a.source.subtopic) {
        return 1;
      } else if (a.source.subtopic && b.source.subtopic && a.source.subtopic !== b.source.subtopic) {
        return a.source.subtopic.localeCompare(b.source.subtopic);
      // If they both have no subtopic or the same subtopic, sort by date
      } else if (a.date && b.date) {
        const aTime = a.date.toJSDate().getTime();
        const bTime = b.date.toJSDate().getTime();
        return bTime - aTime;
      } else {
        // Sorts all undated items to the bottom of the list
        return -1;
      }
    })
  ), [rssFeeds]);

  if (status !== "success") {
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  } else {
    return (
      <ul className="rss">
        {
          result!.map(({ item, source, date }) => {
            // WARNING: Some of these items contain HTML
            // If they ever contain a script, it's not being filtered out

            return (
              <li>
                <a href={item.link} target="_blank" rel="noreferrer">
                <div className="media">
                <div className="icon-image">{source.iconImg && <img src={source.iconImg}/>}</div>
                <div className="background-image">{source.backgroundImg && <img src={source.backgroundImg} alt={source.name} />}</div>
                <div className="item-container">
                  <div className="item-F-line">
                    <div className="r1 bold source-name">
                      {source.name}
                      {source.subtopic && ` - ${source.subtopic}`}
                    </div>
                    <div className="footnote item-publish-date">{date?.setLocale("fr").toFormat("HH:mm")}</div>
                  </div>
                  {source.encodedTitles ? 
                    (<h6 className="item-title" dangerouslySetInnerHTML={{ __html: item.title ?? "" }} />)
                    : (<h6 className="item-title">{item.title}</h6>)
                  }
                  {item.description && 
                    <p className="item-description" dangerouslySetInnerHTML={{ __html: item.description }} />}
                    
                  </div></div>
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  }
};

export default RssContent;