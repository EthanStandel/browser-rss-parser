# Browser RSS parser

I was asked to throw this together for someone.  It just checks `window["rssFeeds"]` for an `Array<{ url: string; name: string; }>` that defines RSS feeds.  I `fetch`* and parse those feeds and either mount some details about them to `#mount-rss-feed` or I append `div#mount-rss-feed` directly into the `document.body`.  I use `rollup` and a smorgasbord of plugins to parse and minify it all to a single greenfield browser friendly file.

*I actually go through a free public CORS proxy to fetch the feeds because part of the point of the ask was to have all the code in the browser and not to have to stand up another server.

* Q&A
  - Do you think this is good code?
    - No.
  - Why didn't you use a framework or add any styling?
    - The person who this is for told me they wanted to style it themselves, they just needed logic.
  - Why are a handful of the string results in French?
    - The person who asked me to do this is French.  I'm not French, I just used Google translate for certain strings and used `luxon` locales for date strings.
