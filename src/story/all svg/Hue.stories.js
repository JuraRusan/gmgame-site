import React from "react";
import HueSvgComponent from "../../bases/icons/hueSvg/HueSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Hue",
  component: HueSvgComponent,
};

const Template = (args) => <HueSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
