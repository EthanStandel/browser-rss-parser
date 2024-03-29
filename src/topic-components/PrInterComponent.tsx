import { jsonToListDisc, podcastDiffusion } from "./topicVAR";
import { Disc } from '../components/gen/Disclosure_comp';
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const PrinterEntries = [
  {
    "title": "Nightly News",
    "URL": "https://www.nbcnews.com/nightly-news-full-episodes",
    "image1": iconsByNewsroom.NBC["Nightly News"].iconImg,
    "image2": iconsByNewsroom.NBC.iconImg,
    "duration": "20min",
    "description": "Coverage of the latest global and US breaking news stories by Lester Holt at 5:12 am&nbsp;(CET).",
    "countryISO3Label": "USA"
  },
  {
    "title": "Evening News",
    "URL": "https://www.cbsnews.com/evening-news/full-episodes/",
    "image1": iconsByNewsroom.CBS["Evening News"].iconImg,
    "image2": iconsByNewsroom.CBS.iconImg,
    "duration": "20min",
    "description": "Watch the CBS Evening News, the longest-running evening newscast, at 12:30 am&nbsp;(CET).",
    "countryISO3Label": "USA"
  },
  {
    "title": "Late News",
    "URL": "https://iview.abc.net.au/show/abc-late-news/series/0/",
    "image1": iconsByNewsroom["ABC Australia"]["Late News"].iconImg,
    "image2": iconsByNewsroom["ABC Australia"].iconImg,
    "duration": "15min",
    "description": "ABC News brings you comprehensive coverage from our reporters on the ground telling you what's happening and why it matters. Presented by Michael Tetlow at 12:40 am&nbsp;(CET).",
    "countryISO3Label": "AUS"
  },
  {
    "title": "100 Sekunden",
    "URL": "https://www.tagesschau.de/100sekunden/",
    "image1": "./icons/WebsitesIcons/tagesschau.png",
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "2min",
    "description": "Nachrichten schauen auf tagesschau.de –&nbsp;die erste Adresse für Nachrichten und umfassende Berichte zu aktuellen Themen.",
    "countryISO3Label": "DEU"
  },
  {
    "title": "One-Minute World News",
    "URL": "https://www.bbc.co.uk/programmes/p02cfn23",
    "image1": "./icons/WebsitesIcons/bbcnews.png",
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "1min",
    "description": "Watch the latest news summary from BBC World News. International news updated 24 hours a day.",
    "countryISO3Label": "GBR"
  },
  {
    "title": "À la une&nbsp;: Canada, monde et politique",
    "URL": "https://ici.radio-canada.ca/ohdio/balados/302/nouvelles-info-matin-canada-monde-politique",
    "image1": "./icons/WebsitesIcons/radiocanada.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "23min",
    "description": "Mathieu Belhumeur est entouré de ses collaborateurs pour présenter les principales nouvelles d'ici et d'ailleurs. Le tout sur un ton convivial. Un condensé de l'actualité pour bien démarrer la journée.",
    "countryISO3Label": "CAN",
    "specialisation": podcastDiffusion([1,2,3,4,5])
  }
]

const PrInterComponent = () => {
  return (
    Disc(<h5>Les rendez-vous internationaux</h5>,<ul className='rss nList nListInblock' dangerouslySetInnerHTML={{ __html: jsonToListDisc(PrinterEntries)}} />,"Printer",PrinterEntries.length,"discIDBlock")
  );
}

export default PrInterComponent