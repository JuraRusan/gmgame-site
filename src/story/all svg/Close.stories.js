import React from "react";
import CloseSvgComponent from "../../bases/icons/closeSvg/CloseSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Close",
  component: CloseSvgComponent,
};

const Template = (args) => <CloseSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
