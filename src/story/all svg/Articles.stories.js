import React from "react";
import ArticlesSvgComponent from "../../bases/icons/articlesSvg/ArticlesSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Articles",
  component: ArticlesSvgComponent,
};

const Template = (args) => <ArticlesSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
