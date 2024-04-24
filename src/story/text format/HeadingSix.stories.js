import React from "react";
import HeadingSixSvgComponent from "../../bases/icons/formatHeadingSixSvg/HeadingSixSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/HeadingSix",
  component: HeadingSixSvgComponent,
};

const Template = (args) => <HeadingSixSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
