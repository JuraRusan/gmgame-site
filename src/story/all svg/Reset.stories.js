import React from "react";
import ResetSvgComponent from "../../bases/icons/resetSvg/ResetSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Reset",
  component: ResetSvgComponent,
};

const Template = (args) => <ResetSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
