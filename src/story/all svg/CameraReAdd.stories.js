import React from "react";
import CameraReAddSvgComponent from "../../bases/icons/cameraReAdd/CameraReAddSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/CameraReAdd",
  component: CameraReAddSvgComponent,
};

const Template = (args) => <CameraReAddSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
