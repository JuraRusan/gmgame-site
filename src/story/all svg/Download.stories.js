import React from "react";
import DownloadSvgComponent from "../../bases/icons/downloadSvg/DownloadSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Download",
  component: DownloadSvgComponent,
};

const Template = (args) => <DownloadSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
