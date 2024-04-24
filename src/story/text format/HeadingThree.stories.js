import React from "react";
import HeadingThreeSvgComponent from "../../bases/icons/formatHeadingThreeSvg/HeadingThreeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingThree",
  component: HeadingThreeSvgComponent,
};

const Template = (args) => <HeadingThreeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
