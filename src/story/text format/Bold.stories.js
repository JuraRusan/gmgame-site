import React from 'react';
import BoldSvgComponent from "../../bases/icons/formatBoldSVG/BoldSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Bold',
  component: BoldSvgComponent
};

const Template = (args) => <BoldSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault