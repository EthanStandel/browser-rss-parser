import { FC } from "react";
import CustomSportComponent from "./CustomSportComponent";
import CustomCultureComponent from "./CustomCultureComponent";
import CustomÀlauneComponent from "./CustomÀlauneComponent";
import EuropeComponent from "./EuropeComponent";

const topicComponents: Record<string, FC> = {
  "Sport": CustomSportComponent,
  "Culture": CustomCultureComponent,
  "À la une": CustomÀlauneComponent,
  "Europe": EuropeComponent
};

export default topicComponents;
