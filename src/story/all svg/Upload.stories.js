import React from "react";
import UploadSvgComponent from "../../bases/icons/uploadSvg/UploadSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Upload",
  component: UploadSvgComponent,
};

const Template = (args) => <UploadSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
