import React from 'react';
import BinSvgComponent from "../../bases/icons/binSVG/binSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Bin',
  component: BinSvgComponent
};

const Template = (args) => <BinSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault