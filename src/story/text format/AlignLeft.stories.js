import React from "react";
import AlignLeftSvgComponent from "../../bases/icons/formatAlignLeftSvg/AlignLeftSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/FormatAlignLeft",
  component: AlignLeftSvgComponent,
};

const Template = (args) => <AlignLeftSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
