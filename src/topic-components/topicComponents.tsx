import { FC } from "react";
import SportComponent from "./SportComponent";
import CultureComponent from "./CultureComponent";
import CustomÀlauneComponent from "./CustomÀlauneComponent";
import EuropeComponent from "./EuropeComponent";
import ArtdevivreComponent from "./ArtdevivreComponent";
import EcoComponent from "./EcoComponent";
import IdeesComponent from "./IdeesComponent";
import ScienceComponent from "./ScienceComponent";
import MondeComponent from "./MondeComponent";

const topicComponents: Record<string, FC> = {
  "Culture": CultureComponent,
  "À la une": CustomÀlauneComponent,
  "Europe": EuropeComponent,
  "Art de vivre": ArtdevivreComponent,
  "Économie": EcoComponent,
  "Idées": IdeesComponent,
  "Science": ScienceComponent,
  "Monde": MondeComponent,
  "Sport": SportComponent
};

export default topicComponents;
