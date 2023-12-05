import React from 'react';
import ArrowSvgComponent from "../../bases/icons/arrowSvg/ArrowSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Arrow',
  component: ArrowSvgComponent
};

const Template = (args) => <ArrowSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault