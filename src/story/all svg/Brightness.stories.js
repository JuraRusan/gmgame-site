import React from "react";
import BrightnessSvgComponent from "../../bases/icons/brightnessSvg/BrightnessSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Brightness",
  component: BrightnessSvgComponent,
};

const Template = (args) => <BrightnessSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
