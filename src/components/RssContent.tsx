import React from "react";
import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";
import axios from "axios";
import { useAsync } from "@react-hookz/web";
import { Spinner } from "./Spinner";
import _unescape from "lodash/unescape";

export interface RssFeedSource {
  url: string;
  name?: string;
  count?: number;
  iconImg?: string;
  backgroundImg?: string;
  encodedTitles?: boolean;
  specification?: string;
  subtopic?: string;
}

interface ParsedRssItem {
  link: string;
  image?: string;
  title?: string;
  pubDate?: string; // RFC2822 date
  description?: string;
  author?: string;
  "media:content"?: {
    url?: string;
  }
  "dc:creator"?: string;
  enclosure?: {
    type?: string;
    url?: string;
  }
  "dc:date"?: string;
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

var dd = String(new Date().getDate()).padStart(2, '0');
var yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate()-1);
var ddyesterday = String(yesterdayDate.getDate()).padStart(2, '0');

var beforeYesterdayDate = new Date();
beforeYesterdayDate.setDate(beforeYesterdayDate.getDate()-2);
var ddbeforeYesterday = String(beforeYesterdayDate.getDate()).padStart(2, '0');

const todayFormat = dd + '/' + (new Date().getMonth()+1) ;
const yesterdayFormat = ddyesterday + '/' + (yesterdayDate.getMonth()+1) ;
const beforeYesterdayFormat = ddbeforeYesterday + '/' + (beforeYesterdayDate.getMonth()+1) ;

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
            
            const titleSplitTitle = item.title?.split(", says ")[0] ?? item.title?.split(", blasts ")[0] ?? item.title?.split(", warns ")[0];
            const titleSplit = item.title?.split(", says ")[1] ?? item.title?.split(", blasts ")[1] ?? item.title?.split(", warns ")[1];

            const imgHref = 
            item.image
            ?? item["media:content"]?.url
            ?? item.enclosure?.url ? item.enclosure?.url 
            : source.backgroundImg;

            const AppIconImg = source.iconImg ?? "./icons/WebsitesIcons/applenews.png";

            let author = item.author ?? item["dc:creator"];

            let displayedDate = date?.setLocale("fr").toFormat("dd/M").replace('Invalid DateTime', '').replace(todayFormat, '' + date?.setLocale("fr").toFormat("HH:mm")).replace(yesterdayFormat, 'hier, ' + date?.setLocale("fr").toFormat("HH:mm")).replace(beforeYesterdayFormat, 'avant-hier');

            return (

              <li className={source.specification}>
                <article>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="media">
                      <div className="iconContainer">
                        <div className="icon-image">
                          <img src="https://apps.apple.com/assets/images/masks/icon-app-mask-border-61226afcae6a8f2b3d2755728daaf4f2.svg"/>
                        </div>
                        <div className="icon-image">
                          <img src={AppIconImg}/>
                        </div>
                        <div className="background-image">
                          <img src={imgHref}/>
                        </div>
                      </div>
                      <div className="itemContainer">
                        <div className="item-F-line">
                          <div className="r1 bold source-name">
                            {source.name}
                            {source.subtopic && ` - ${source.subtopic}`}
                          </div>
                          <div className="r2 item-publish-date">
                            {displayedDate}
                          </div>
                        </div>
                        <h6 className="titleLine"dangerouslySetInnerHTML={{ __html: _unescape(item.title ?? "")}} />
                        <div className="descriptionLine">
                          <div className="r2 item-publish-date">
                            {displayedDate}
                          </div>
                          <div className="item-descriptionWrapper">
                            {item.description && <div className="h8 item-description" dangerouslySetInnerHTML={{ __html: _unescape(item.description)}} />}
                          </div>
                        </div>
                        <div className="descriptionLine2">
                          <div className="r2 item-publish-date">
                            {displayedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>
            );
          })
        }
      </ul>
    );
  }
};

export default RssContent;