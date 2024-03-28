import React from "react";
import MarkerSvgComponent from "../../bases/icons/markerSvg/MarkerSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Marker",
  component: MarkerSvgComponent,
};

const Template = (args) => <MarkerSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
