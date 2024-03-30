import React from "react";
import QuestionSvgComponent from "../../bases/icons/questionSvg/QuestionSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Question",
  component: QuestionSvgComponent,
};

const Template = (args) => <QuestionSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
