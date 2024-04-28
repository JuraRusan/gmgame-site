import React from "react";
import LeftSwipeSvgComponent from "../../bases/icons/leftSwipeSvg/LeftSwipeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/LeftSwipe",
  component: LeftSwipeSvgComponent,
};

const Template = (args) => <LeftSwipeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
