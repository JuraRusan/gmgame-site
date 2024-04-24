import React from "react";
import ParagraphSvgComponent from "../../bases/icons/formatParagraphSvg/ParagraphSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/Paragraph",
  component: ParagraphSvgComponent,
};

const Template = (args) => <ParagraphSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
