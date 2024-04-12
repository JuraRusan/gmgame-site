import React from "react";
import AlignCenterSvgComponent from "../../bases/icons/formatAlignCenterSvg/AlignCenterSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/FormatAlignCenter",
  component: AlignCenterSvgComponent,
};

const Template = (args) => <AlignCenterSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
