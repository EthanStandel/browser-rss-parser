import { FC } from "react";
import CustomSportComponent from "./CustomSportComponent";
import CustomCultureComponent from "./CustomCultureComponent";
import CustomÀlauneComponent from "./CustomÀlauneComponent";

const topicComponents: Record<string, FC> = {
  "Sport": CustomSportComponent,
  "Culture": CustomCultureComponent,
  "À la une": CustomÀlauneComponent
};

export default topicComponents;
