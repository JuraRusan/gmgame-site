import React from "react";
import LogoMainTextSvgComponent from "../bases/icons/LogoMainText";

export default {
  title: "UI/Svg/LogoMain",
  component: LogoMainTextSvgComponent,
};

const Template = (args) => <LogoMainTextSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "500px",
  height: "auto",
};
