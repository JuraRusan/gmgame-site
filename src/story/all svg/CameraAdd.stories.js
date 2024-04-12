import React from "react";
import CameraAddSvgComponent from "../../bases/icons/cameraAdd/CameraAddSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/CameraAdd",
  component: CameraAddSvgComponent,
};

const Template = (args) => <CameraAddSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
