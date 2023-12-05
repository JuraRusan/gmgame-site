import React from 'react';
import GoOutSvgComponent from "../../bases/icons/goOutSvg/GoOutSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/GoOut',
  component: GoOutSvgComponent
};

const Template = (args) => <GoOutSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault