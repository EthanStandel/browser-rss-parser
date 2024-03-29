import React from "react";
import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";
import axios from "axios";
import { useAsync } from "@react-hookz/web";
import { Spinner } from "../Spinner";
import _unescape from "lodash/unescape";
import _deburr from "lodash/deburr";
import { range } from "lodash";

export interface RssFeedSource {
  url: string;
  name?: string;
  articlesCount?: number;
  iconImg?: string;
  backgroundImg?: string;
  specification?: string;
  articlesCountryISO3?: string;
  category?: string;
  subtopic?: string;
  topic?: string;
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

// The following function creates date formats for the n days before (dateNDaysBefore[]) and associates to NDaysBeforeWeekday the corresponding weekday
var NDaysBeforeWeekday = [""]
var dateNDaysBefore = [""]
function weekday(n: number) {
  const daysIndex = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  if (n > 0) {
    for (let i of range(n + 1)) {
      var minusDay = new Date();
      minusDay.setDate(minusDay.getDate() - i);
      var ddMinusDay = String(minusDay.getDate()).padStart(2, '0');
      var DateMinusDay = ddMinusDay + '/' + String((minusDay.getMonth() + 1)).padStart(2, '0');

      // N-days-before Date
      dateNDaysBefore[i] = String(DateMinusDay);

      // weekday for n-days-before day
      NDaysBeforeWeekday[i] = daysIndex[minusDay.getDay()];
    }
  }
}

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

            // const titleSplitTitle = item.title?.split(", says ")[0] ?? item.title?.split(", blasts ")[0] ?? item.title?.split(", warns ")[0];
            // const titleSplit = item.title?.split(", says ")[1] ?? item.title?.split(", blasts ")[1] ?? item.title?.split(", warns ")[1];

            /*/ UNIQUE CODE FOR THE ITEM
            var str = String(item.title);
            var matches = str.match(/\b(\w)/g);
            var titleAcronym = matches?.join('');
            /*/

            const imgHref =
              item.image
              || item["media:content"]?.url
              || item.enclosure?.url
              || source.backgroundImg
              || "./genIcons/applenews_bgIMG_alt.jpg";

            let author = item.author || item["dc:creator"];
            author = (author?.includes(String(source.name)) ?? author?.includes(String(source.name?.toUpperCase)) ?? author?.includes(String(source.name?.toLowerCase)) ?? author?.includes("AFP") ?? author?.includes(String(_deburr(source.name)))) ? "" : author;

            // var splitTitleCategory = (item.title?.includes("|") ? item.title.split("| ")[0] : undefined)



            /// FILTER FOR TOPICS 
            let concatListofCategories = [(item.category || source.category)].join(',').split(',').slice(0, 3)

            var filteredTopics = ['Content Type: Personal Profile', '/style-beauty', '/transportation', 'Vivre', '/travel', '/arts', 'Nos recommandations culturelles', 'Images', 'blog', 'Auto-News', 'has_diapo', 'Produits', 'Radio 1', 'all', 'News', 'Actu', 'Actus', 'Video', 'Vidéo', 'Diaporama', 'Not found', 'Fil Info', 'Magazine', 'Flash Actu']
            for (var filteredTopicElement of filteredTopics) {
              // eslint-disable-next-line
              concatListofCategories = concatListofCategories.filter(arrayElement => !arrayElement.includes(filteredTopicElement))
            }

            var filteredTopicsArray = []
            for (var element of concatListofCategories) {
              var correctedElement = String(element
                .replace(' and ', ' & ')
                .replace(' et ', ' & ')
                .replace('News /', '')
                .replace('Culture /', '')
                .replace('World /', '')
                .replace('&amp;', '&')
                .replace('topics:things/', '')
                .replace('topics:places/', '')
                .replace('d&#039;', "'")
                .replace('France - Monde', "Monde")
                .replace('&#039;', "’")
                .replace('/ Motoring', '')
              );

              if (correctedElement !== "") {
                filteredTopicsArray.push(correctedElement)
              }
            }
            var displayedTopics = filteredTopicsArray.join(', ')

            let countryISO3Label = String(source.articlesCountryISO3)
            if ((source.articlesCountryISO3 === undefined) ?? (source.articlesCountryISO3 == null)) {
              countryISO3Label = "FRA"
            } /* by default, articles are considered from French newsrooms and hidden */

            weekday(7)
            var displayedDate = date?.setLocale("fr").toFormat("dd/MM").replace('Invalid DateTime', '').replace(dateNDaysBefore[0], '' + date?.setLocale("fr").toFormat("HH:mm")).replace(dateNDaysBefore[1], 'hier, ' + date?.setLocale("fr").toFormat("HH:mm")).replace(dateNDaysBefore[2], 'avant-hier').replace(dateNDaysBefore[3], NDaysBeforeWeekday[3]).replace(dateNDaysBefore[4], NDaysBeforeWeekday[4]).replace(dateNDaysBefore[5], NDaysBeforeWeekday[5]).replace(dateNDaysBefore[6], NDaysBeforeWeekday[6]);

            return (
              <li className={source.specification} lang={countryISO3Label}>
                <article>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="media">
                      <div className="iconContainer">
                        <div className="iconImgWrapper">
                          <img
                            src={source.iconImg}
                            alt=""
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = "./icons/WebsitesIcons/applenews.png";
                            }}
                          />
                        </div>
                        <div className="background-image">
                          <img src={imgHref}
                            alt={"illustrative image for " + source.name}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = "./genIcons/applenews_bgIMG_alt.jpg";
                            }}
                          />
                        </div>
                      </div>
                      <div className="itemContainer">
                        <div className="firstLine">
                          <div className="r1 up bold articleCategory">
                            {displayedTopics}
                          </div>
                          <div className="r2 up articleDate">
                            {((displayedTopics === "") ?? (displayedTopics === null)) ? null : String(displayedDate)}
                          </div>
                        </div>
                        <div className="justifiedTitle spacingLine">
                          <h6 className="titleLine">
                            {(countryISO3Label !== "FRA") ? <div className={"LanguageLabel r4 " + countryISO3Label}>{countryISO3Label}</div> : null}
                            <div className="itemTitle" dangerouslySetInnerHTML={{ __html: (item.title?.includes("|") ? _unescape(item.title.split("| ")[1] ?? "") : _unescape(item.title ?? "")).replace('*** BILDplus Inhalt *** ', '').replace('[EN LIGNE]', '').replace('<<', '«').replace('>>', '»').replace(' :', '&nbsp;:').replace(' ?', '&nbsp;?').replace(' »', '&nbsp;»').replace('« ', '«&nbsp;').replace(" - " + dateNDaysBefore[0], "") }} />
                          </h6>
                          <div className="r2 up articleDate">
                            {((displayedTopics === "") ?? (concatListofCategories === null)) ? String(displayedDate) : null}
                          </div>
                        </div>
                        <div className="descriptionLine">
                          <div className="r2 up articleDate">{displayedDate}</div>
                          {item.description && <div className="h8 item-description" dangerouslySetInnerHTML={{ __html: _unescape(item.description).replace('<<', '«').replace('>>', '»').replace(' :', '&nbsp;:').replace(' ?', '&nbsp;?').replace(' »', '&nbsp;»').replace('« ', '«&nbsp;') }} />}
                        </div>
                        <div className="additional-infosLine">
                          <div className="r4 up">
                            {author?.replace(" avec ", ", ").replace(" et ", ", ").replace(' and ', ', ')}
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