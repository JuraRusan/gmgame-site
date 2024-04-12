import React from "react";
import AlignRightSvgComponent from "../../bases/icons/formatAlignRightSvg/AlignRightSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/FormatAlignRight",
  component: AlignRightSvgComponent,
};

const Template = (args) => <AlignRightSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
