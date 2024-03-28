import React from "react";
import ProfileSvgComponent from "../../bases/icons/profileSvg/ProfileSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Profile",
  component: ProfileSvgComponent,
};

const Template = (args) => <ProfileSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
