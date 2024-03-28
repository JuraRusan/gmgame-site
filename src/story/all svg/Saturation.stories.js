import React from "react";
import SaturationSvgComponent from "../../bases/icons/saturationSvg/SaturationSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Saturation",
  component: SaturationSvgComponent,
};

const Template = (args) => <SaturationSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
