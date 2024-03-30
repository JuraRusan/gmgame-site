import React from "react";
import FlipHorizontalSvgComponent from "../../bases/icons/flipHorizontalSvg/FlipHorizontalSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/FlipHorizontal",
  component: FlipHorizontalSvgComponent,
};

const Template = (args) => <FlipHorizontalSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
