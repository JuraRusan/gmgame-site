import React from "react";
import ManagerSvgComponent from "../../bases/icons/managerSvg/ManagerSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Manager",
  component: ManagerSvgComponent,
};

const Template = (args) => <ManagerSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
