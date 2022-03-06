import { FC } from "react";
import CustomSportComponent from "./CustomSportComponent";
import CustomCultureComponent from "./CustomCultureComponent";

const topicComponents: Record<string, FC> = {
  "Sport": CustomSportComponent,
  "Culture": CustomCultureComponent
};

export default topicComponents;
