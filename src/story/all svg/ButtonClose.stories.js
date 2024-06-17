import React from "react";
import ButtonCloseSvgComponent from "../../bases/icons/buttonCloseSvg/ButtonCloseSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/ButtonClose",
  component: ButtonCloseSvgComponent,
};

const Template = (args) => <ButtonCloseSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
