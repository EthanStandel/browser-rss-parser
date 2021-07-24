import XmlParser from "fast-xml-parser";
import { DateTime } from "luxon";

interface Feed {
  url: string;
  name: string;
  count: number;
}

// This is bad but the whole point of this is to not stand up a server
const openCorsProxy = "https://api.codetabs.com/v1/proxy?quest=";
const rssFeeds = (window as any)["rssFeeds"] as Array<Feed>;

const Application = Object.freeze({
  main: async () => {
    const items = 
      (await Promise.all(
        rssFeeds.map(feed => fetch(openCorsProxy + feed.url)
          .then(response => response.text())
        )
      ))
      .map(unparsedRss => XmlParser.parse(unparsedRss))
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
      });

    const mountEl = document.getElementById("mount-rss-feed") 
      ?? document.body.appendChild(document.createElement("div"));
    mountEl.id = "mount-rss-feed";
    const listEl = document.createElement("ul");
    mountEl.appendChild(listEl);

    items.forEach(({ item, source, date }) => {
      const listItemEl = document.createElement("li");
      // WARNING: Some of these items contain HTML
      // If they ever contain a script, it's not being filtered out
      const imgHref = 
        item.image 
        ?? item["media:content"]?.url
        ?? item.enclosure?.type === "image/jpeg" ? item.enclosure.type
        : source.defaultImg;

      listItemEl.innerHTML = `
        <img src="${imgHref}">
        <div class="source-name">${source.name}</div>
        <div class="item-title">${item.title}</div>
        <div class="item-publish-date">${date?.setLocale("fr").toFormat("yyyy LLL dd")}</div>
        <a class="item-link" href="${item.link}">Lire la suite...</a>
      `;
      listEl.appendChild(listItemEl);
    });
  }
});

Application.main();
