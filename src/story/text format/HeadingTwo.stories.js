import React from "react";
import HeadingTwoSvgComponent from "../../bases/icons/formatHeadingTwoSvg/HeadingTwoSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingTwo",
  component: HeadingTwoSvgComponent,
};

const Template = (args) => <HeadingTwoSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
