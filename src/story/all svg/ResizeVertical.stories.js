import React from "react";
import ResizeVerticalSvgComponent from "../../bases/icons/resizeVerticalSvg/ResizeVerticalSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/ResizeVertical",
  component: ResizeVerticalSvgComponent,
};

const Template = (args) => <ResizeVerticalSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
