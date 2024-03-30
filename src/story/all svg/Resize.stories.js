import React from "react";
import ResizeSvgComponent from "../../bases/icons/resizeSvg/ResizeSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Resize",
  component: ResizeSvgComponent,
};

const Template = (args) => <ResizeSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
