import React from "react";
import ResizeHorizontalSvgComponent from "../../bases/icons/resizeHorizontalSvg/ResizeHorizontalSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/ResizeHorizontal",
  component: ResizeHorizontalSvgComponent,
};

const Template = (args) => <ResizeHorizontalSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
