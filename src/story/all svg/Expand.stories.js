import React from "react";
import ExpandSvgComponent from "../../bases/icons/expandSvg/ExpandSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Expand",
  component: ExpandSvgComponent,
};

const Template = (args) => <ExpandSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
