import React from "react";
import HeadingFourSvgComponent from "../../bases/icons/formatHeadingFourSvg/HeadingFourSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingFour",
  component: HeadingFourSvgComponent,
};

const Template = (args) => <HeadingFourSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
