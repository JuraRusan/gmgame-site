import React from "react";
import ContrastSvgComponent from "../../bases/icons/contrastSvg/ContrastSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Contrast",
  component: ContrastSvgComponent,
};

const Template = (args) => <ContrastSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
