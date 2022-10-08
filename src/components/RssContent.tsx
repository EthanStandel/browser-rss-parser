import React from "react";
import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";
import axios from "axios";
import { useAsync } from "@react-hookz/web";
import { Spinner } from "./Spinner";
import _unescape from "lodash/unescape";
import _deburr from "lodash/deburr";
import { countReset } from "console";

export interface RssFeedSource {
  url: string;
  name?: string;
  articlesCount?: number;
  iconImg?: string;
  backgroundImg?: string;
  encodedTitles?: boolean;
  specification?: string;
  category?: string;
  subtopic?: string;
  articlesCountryISO3?: string;
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
  "media:thumbnail url"?: string;
  category?: string;
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
const beforeYesterdayFormat = ddbeforeYesterday + '/' + (beforeYesterdayDate.getMonth()+1);

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
      typeof rssFeeds[index].articlesCount === "undefined"
        ? curr
        : curr.slice(0, rssFeeds[index].articlesCount)
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

            var author = item.author || item["dc:creator"];
            var author = author?.includes(String(source.name)) ? undefined : author;
            var author = author?.includes(String(source.name?.toUpperCase)) ? undefined : author;
            var author = author?.includes(String(source.name?.toLowerCase)) ? undefined : author;
            var author = author?.includes("AFP") ? undefined : author;
            var author = author?.includes(String(_deburr(source.name))) ? undefined : author;

            let concatListofCategories = [(item.category || source.category)].join(',') /* select categories from the RSS feed if none is specified*/
     
            let arrayCategories = concatListofCategories.split(',').slice(0, 3); /* presents categories in an array with 3 elements (split in elements by comma sign) */

            var arrayCategoriesTEST = []
            for (var element of arrayCategories) {
              var correctedElement = String(element.replace(' and ', ' & ').replace('Content Type: Personal Profile', '').replace('News /', '').replace('has_diapo', ''));
              
              if (correctedElement != "") {
                arrayCategoriesTEST.push(correctedElement)
              } else {
                arrayCategoriesTEST.push("")
              }
            }
            
           /* var arrayCategoriesTEST2 = Array()
            while (arrayCategoriesTEST.includes("")) {
                const start = arrayCategoriesTEST.indexOf('');
                var arrayCategoriesTEST2 = arrayCategoriesTEST.splice(start, 1);
                var arrayCategoriesTEST = arrayCategoriesTEST2;
              } ADDITION TO FILTER THE EMPTY STRINGS FROM arrayCATEGROIESTEST.push("") (l. 153)*/ 
            
            const arrford = require('arrford');
            let CategoriesCommaSeparated = arrford(arrayCategoriesTEST, false).replace(' and ', ', '); /* list formatting with commas' */

            var countryISO3Label = String(source.articlesCountryISO3)

            if ((source.articlesCountryISO3 == "") || (source.articlesCountryISO3 == null)) {
              var countryISO3Label = "FRA"
            } /* by default, articles are considered from French newsrooms and hidden */

            let displayedDate = date?.setLocale("fr").toFormat("dd/M").replace('Invalid DateTime', '').replace(todayFormat, '' + date?.setLocale("fr").toFormat("HH:mm")).replace(yesterdayFormat, 'hier, ' + date?.setLocale("fr").toFormat("HH:mm")).replace(beforeYesterdayFormat, 'avant-hier');
            
            var displayedFirstLineDate = String(displayedDate)
            var displayedSecondLineDate= ""
            if ((concatListofCategories == "") || (concatListofCategories == null)) {
              var displayedFirstLineDate = ""
              var displayedSecondLineDate= String(displayedDate)
            } /* if an article doesn't have a category, the date is displayed on the secondline (justifiedTitle), otherwhise, it's diplayed on the first line alongside the category */

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
                        <div className="firstLine">
                          <div className="r1 bold articleCategory">
                            {CategoriesCommaSeparated}
                          </div>
                          <div className="r2 articleDate">
                            {displayedFirstLineDate}
                          </div>
                        </div>
                        <div className="justifiedTitle">
                          <h6 className="titleLine">
                            <div className={"LanguageLabel r4 " + countryISO3Label}>{countryISO3Label}</div>
                            <div className="ItemTitle" dangerouslySetInnerHTML={{ __html: _unescape(item.title ?? "").replace('*** BILDplus Inhalt *** ','').replace('<<','«').replace('>>','»').replace(' :','&nbsp;:').replace(' ?','&nbsp;?').replace(' »','&nbsp;»').replace('« ','«&nbsp;')}} />
                          </h6>
                          <div className="r2 articleDate">
                            {displayedSecondLineDate}
                          </div>
                        </div>
                        <div className="descriptionLine">
                          <div className="r2 articleDate">
                            {displayedDate}
                          </div>
                            {item.description && <div className="h8 item-description" dangerouslySetInnerHTML={{ __html: _unescape(item.description).replace('<<','«').replace('>>','»').replace(' :','&nbsp;:').replace(' ?','&nbsp;?').replace(' »','&nbsp;»').replace('« ','«&nbsp;')}} />}
                        </div>
                        <div className="additional-infosLine">
                          <div className="r4">
                            {author?.replace(" avec ", ", ").replace(" et ", ", ")}
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