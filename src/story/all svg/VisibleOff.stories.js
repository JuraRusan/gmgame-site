import React from "react";
import VisibleOffSvgComponent from "../../bases/icons/visibleOffSvg/VisibleOffSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/VisibleOff",
  component: VisibleOffSvgComponent,
};

const Template = (args) => <VisibleOffSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
