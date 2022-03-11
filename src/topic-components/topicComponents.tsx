import { FC } from "react";
import SportComponent from "./SportComponent";
import CultureComponent from "./CultureComponent";
import ÀlauneComponent from "./ÀlauneComponent";
import EuropeComponent from "./EuropeComponent";
import ArtdevivreComponent from "./ArtdevivreComponent";
import EcoComponent from "./EcoComponent";
import IdeesComponent from "./IdeesComponent";
import ScienceComponent from "./ScienceComponent";
import MondeComponent from "./MondeComponent";
import PrInterComponent from "./PrInterComponent";
import AutoComponent from "./AutoComponent";

const topicComponents: Record<string, FC> = {
  "Culture": CultureComponent,
  "À la une": ÀlauneComponent,
  "Europe": EuropeComponent,
  "Art de vivre": ArtdevivreComponent,
  "Économie": EcoComponent,
  "Idées": IdeesComponent,
  "Science": ScienceComponent,
  "Monde": MondeComponent,
  "Sport": SportComponent,
  "Presse étrangère": PrInterComponent,
  "Auto": AutoComponent
};

export default topicComponents;
