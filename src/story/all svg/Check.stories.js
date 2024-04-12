import React from "react";
import CheckSvgComponent from "../../bases/icons/checkSvg/CheckSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Check",
  component: CheckSvgComponent,
};

const Template = (args) => <CheckSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
