import React from "react";
import PlaySvgComponent from "../../bases/icons/playSvg/PlaySvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Play",
  component: PlaySvgComponent,
};

const Template = (args) => <PlaySvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
