import React from "react";
import LinkSvgComponent from "../../bases/icons/formatLinkSvg/LinkSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/Format/Link",
  component: LinkSvgComponent,
};

const Template = (args) => <LinkSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
