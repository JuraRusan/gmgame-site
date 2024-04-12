import React from "react";
import StatusSvgComponent from "../../bases/icons/statusSvg/StatusSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Status",
  component: StatusSvgComponent,
};

const Template = (args) => <StatusSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
