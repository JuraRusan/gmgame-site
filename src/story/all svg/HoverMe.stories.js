import React from 'react';
import HoverMeSvgComponent from "../../bases/icons/hoverMeSvg/HoverMeSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/HoverMe',
  component: HoverMeSvgComponent
};

const Template = (args) => <HoverMeSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault