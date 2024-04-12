import React from "react";
import AlignJustifySvgComponent from "../../bases/icons/formatAlignJustifySvg/AlignJustifySvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/FormatAlignJustify",
  component: AlignJustifySvgComponent,
};

const Template = (args) => <AlignJustifySvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
