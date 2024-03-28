import React from "react";
import InstagramSvgComponent from "../../bases/icons/instagramSvg/InstagramSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Instagram",
  component: InstagramSvgComponent,
};

const Template = (args) => <InstagramSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
