import React from "react";
import FlipVerticalSvgComponent from "../../bases/icons/flipVerticalSvg/FlipVerticalSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/FlipVertical",
  component: FlipVerticalSvgComponent,
};

const Template = (args) => <FlipVerticalSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
