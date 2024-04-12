import React from "react";
import ResizeReduceSvgComponent from "../../bases/icons/resizeReduceSvg/ResizeReduceSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/ResizeReduce",
  component: ResizeReduceSvgComponent,
};

const Template = (args) => <ResizeReduceSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
