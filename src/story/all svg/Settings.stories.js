import React from 'react';
import SettingsSvgComponent from "../../bases/icons/settingsSvg/SettingsSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Settings',
  component: SettingsSvgComponent
};

const Template = (args) => <SettingsSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault