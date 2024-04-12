import React from "react";
import CropSvgComponent from "../../bases/icons/cropSvg/CropSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Crop",
  component: CropSvgComponent,
};

const Template = (args) => <CropSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
