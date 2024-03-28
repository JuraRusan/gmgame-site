import React from "react";
import HeartSvgComponent from "../../bases/icons/heartSvg/HeartSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Heart",
  component: HeartSvgComponent,
};

const Template = (args) => <HeartSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
