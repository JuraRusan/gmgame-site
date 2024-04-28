import React from "react";
import RightSwipeSvgComponent from "../../bases/icons/rightSwipeSvg/RightSwipeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/RightSwipe",
  component: RightSwipeSvgComponent,
};

const Template = (args) => <RightSwipeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
