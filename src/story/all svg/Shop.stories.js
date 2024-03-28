import React from "react";
import ShopSvgComponent from "../../bases/icons/shopSvg/ShopSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Shop",
  component: ShopSvgComponent,
};

const Template = (args) => <ShopSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
