import React from "react";
import HeadingOneSvgComponent from "../../bases/icons/formatHeadingOneSvg/HeadingOneSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingOne",
  component: HeadingOneSvgComponent,
};

const Template = (args) => <HeadingOneSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
