import React from "react";
import HeadingFiveSvgComponent from "../../bases/icons/formatHeadingFiveSvg/HeadingFiveSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingFive",
  component: HeadingFiveSvgComponent,
};

const Template = (args) => <HeadingFiveSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
