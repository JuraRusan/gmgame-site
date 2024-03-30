import React from "react";
import VisibleOnSvgComponent from "../../bases/icons/visibleOnSvg/VisibleOnSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/VisibleOn",
  component: VisibleOnSvgComponent,
};

const Template = (args) => <VisibleOnSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
