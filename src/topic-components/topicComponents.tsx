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
import EthiqueComponent from "./EthiqueComponent";
import SocieteComponent from "./SocieteComponent";
import PlaneteComponent from "./PlaneteComponent";

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
  "Éthique": EthiqueComponent,
  "Auto-moto": AutoComponent,
  "Société": SocieteComponent,
  "Planète": PlaneteComponent
};

export default topicComponents;
