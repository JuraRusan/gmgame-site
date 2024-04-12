import React from "react";
import CenterSvgComponent from "../../bases/icons/centerSvg/CenterSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Center",
  component: CenterSvgComponent,
};

const Template = (args) => <CenterSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
