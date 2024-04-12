import React from "react";
import PrizeSvgComponent from "../../bases/icons/prizeSvg/PrizeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Prize",
  component: PrizeSvgComponent,
};

const Template = (args) => <PrizeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
