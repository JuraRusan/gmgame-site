import React from "react";
import StopPlaySvgComponent from "../../bases/icons/stopPlaySvg/StopPlaySvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/StopPlay",
  component: StopPlaySvgComponent,
};

const Template = (args) => <StopPlaySvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
