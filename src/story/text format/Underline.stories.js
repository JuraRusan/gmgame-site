import React from 'react';
import UnderlineSvgComponent from "../../bases/icons/formatUnderlineSVG/UnderlineSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Underline',
  component: UnderlineSvgComponent
};

const Template = (args) => <UnderlineSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault