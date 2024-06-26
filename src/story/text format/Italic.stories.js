import React from "react";
import ItalicSvgComponent from "../../bases/icons/formatItalicSvg/ItalicSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/Italic",
  component: ItalicSvgComponent,
};

const Template = (args) => <ItalicSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
