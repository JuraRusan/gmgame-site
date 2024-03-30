import React from "react";
import ResizeMaximizeSvgComponent from "../../bases/icons/resizeMaximizeSvg/ResizeMaximizeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/ResizeMaximize",
  component: ResizeMaximizeSvgComponent,
};

const Template = (args) => <ResizeMaximizeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
