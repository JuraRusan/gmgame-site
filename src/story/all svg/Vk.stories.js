import React from 'react';
import VkSvgComponent from "../../bases/icons/vkSvg/VkSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Vk',
  component: VkSvgComponent
};

const Template = (args) => <VkSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault