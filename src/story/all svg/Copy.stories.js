import React from "react";
import CopySvgComponent from "../../bases/icons/copySvg/CopySvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Copy",
  component: CopySvgComponent,
};

const Template = (args) => <CopySvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
