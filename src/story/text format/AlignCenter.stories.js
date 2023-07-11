import React from 'react';
import AlignCenterSvgComponent from "../../bases/icons/formatAlignCenterSVG/AlignCenterSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Format align center',
  component: AlignCenterSvgComponent
};

const Template = (args) => <AlignCenterSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault