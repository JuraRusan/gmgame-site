import React from "react";
import SaveSvgComponent from "../../bases/icons/saveSvg/SaveSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Save",
  component: SaveSvgComponent,
};

const Template = (args) => <SaveSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
