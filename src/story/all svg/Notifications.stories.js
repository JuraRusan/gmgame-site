import React from "react";
import NotificationsSvgComponent from "../../bases/icons/notificationsSvg/NotificationsSvg";
import { arrayDefault } from "../IconDefaultStorybookTypes";

export default {
  title: "UI/Svg/All/Notifications",
  component: NotificationsSvgComponent,
};

const Template = (args) => <NotificationsSvgComponent {...args} />;

export const Default = Template.bind({});
Default.args = arrayDefault;
