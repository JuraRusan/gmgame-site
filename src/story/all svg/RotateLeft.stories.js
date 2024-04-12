import React from "react";
import RotateLeftSvgComponent from "../../bases/icons/rotateLeftSvg/RotateLeftSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/RotateLeft",
  component: RotateLeftSvgComponent,
};

const Template = (args) => <RotateLeftSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
