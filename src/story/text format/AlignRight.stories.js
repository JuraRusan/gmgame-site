import React from 'react';
import AlignRightSvgComponent from "../../bases/icons/formatAlignRightSvg/AlignRightSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Format align right',
  component: AlignRightSvgComponent
};

const Template = (args) => <AlignRightSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault