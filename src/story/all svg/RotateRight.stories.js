import React from "react";
import RotateRightSvgComponent from "../../bases/icons/rotateRightSvg/RotateRightSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/RotateRight",
  component: RotateRightSvgComponent,
};

const Template = (args) => <RotateRightSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
