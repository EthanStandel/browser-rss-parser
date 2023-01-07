import { LàVdiffusion, Sdiffusion, jsonToListDisclosure } from "./topicVAR";
import { Disc } from '../components/Disclosure_comp'
import iconsByNewsroom from "../resources/iconsByNewsroom.json";

const PrinterFREntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": "La Revue de presse internationale",
    "URL": "https://www.franceculture.fr/emissions/revue-de-presse-internationale",
    "image1": "./icons/WebsitesIcons/franceculture.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "6min",
    "description": "Panorama de la presse du monde entier autour d'une actualité par Camille Magnard, du lundi au vendredi dans les Matins de France Culture à 7:35.",
    "specification": LàVdiffusion
  },
  {
    "title": "Le rendez-vous de la presse étrangère",
    "URL": "hhttps://www.franceculture.fr/emissions/la-fabrique-mediatique",
    "image1": iconsByNewsroom.Franceinfo.iconImg,
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "25min",
    "description": "À 7:33, des journalistes correspondants de la presse internationale croisent leurs regards sur un fait d’actualité marquant de la semaine : l’information vue par ceux qui nous l’ont racontée.",
    "specification": Sdiffusion
  }
]

const PrinterOTHEREntries = [

  // always have a countryISOLabel and specification by default once
  {
    "title": "Nightly News",
    "URL": "https://www.nbcnews.com/nightly-news-full-episodes",
    "image1": "./icons/WebsitesIcons/nbcnews.png",
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "20min",
    "description": "Coverage of the latest global and US breaking news stories by Lester Holt at 5:12 am (CET).",
    "countryISO3Label": "USA"
  },
  {
    "title": "100 Sekunden",
    "URL": "https://www.tagesschau.de/100sekunden/",
    "image1": "./icons/WebsitesIcons/tagesschau.png",
    "image2": iconsByNewsroom.Apple.AppleTV.iconImg,
    "duration": "2min",
    "description": "Nachrichten schauen auf tagesschau.de - die erste Adresse für Nachrichten und umfassende Berichte zu aktuellen Themen.",
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
    "title": "À la une : Canada, monde et politique",
    "URL": "https://ici.radio-canada.ca/ohdio/balados/302/nouvelles-info-matin-canada-monde-politique",
    "image1": "./icons/WebsitesIcons/radiocanada.png",
    "image2": iconsByNewsroom.Apple.ApplePodcasts.iconImg,
    "duration": "23min",
    "description": "Mathieu Belhumeur est entouré de ses collaborateurs pour présenter les principales nouvelles d'ici et d'ailleurs. Le tout sur un ton convivial. Un condensé de l'actualité pour bien démarrer la journée.",
    "countryISO3Label": "CAN",
    "specialisation": LàVdiffusion
  }
]

const PrInterComponent = () => {
  return (
    <div className="LeftPodcastsColumn">
      {Disc(<h5 className="bold">Les rendez-vous vers l'étranger</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(PrinterFREntries)}} />,"PrinterFR",PrinterFREntries.length,"discIDBlock")}
      {Disc(<h5 className="bold">Les rendez-vous internationaux</h5>,<ul className='rss-podcasts nList' dangerouslySetInnerHTML={{ __html: jsonToListDisclosure(PrinterOTHEREntries)}} />,"PrinterOTHER",PrinterOTHEREntries.length,"discIDBlock")}
    </div>
  );
}

export default PrInterComponent