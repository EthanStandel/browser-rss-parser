import React from "react";
import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";
import axios from "axios";
import { useAsync } from "@react-hookz/web";

export interface RssFeedSource {
  url: string;
  name?: string;
  count?: number;
  defaultImg?: string;
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
      if (a.date && b.date) {
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
    return null;
  } else {
    return (
      <ul className="mount-rss-feed">
        {
          result!.map(({ item, source, date }) => {
            // WARNING: Some of these items contain HTML
            // If they ever contain a script, it's not being filtered out

            const imgHref = 
              item.image 
              ?? item["media:content"]?.url
              ?? item.enclosure?.type === "image/jpeg" ? item?.enclosure?.type
              : source.defaultImg;

            return (
              <li>
                <a className="item-link" href={item.link} target="_blank">
                <div className="media">
                <div className="image">{imgHref && <img src={imgHref} alt={item.title} />}</div>
                <div className="item-container">
                  <div className="item-F-line">
                    <div className="source-name">{source.name}</div><div className="item-publish-date">{date?.setLocale("fr").toFormat("HH:mm")}</div></div>
                  <div className="item-title">{item.title}</div>
                    
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