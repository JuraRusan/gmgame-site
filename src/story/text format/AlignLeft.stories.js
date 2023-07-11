import React from 'react';
import AlignLeftSvgComponent from "../../bases/icons/formatAlignLeftSVG/AlignLeftSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Format align left',
  component: AlignLeftSvgComponent
};

const Template = (args) => <AlignLeftSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault