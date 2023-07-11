import React from 'react';
import QuoteSvgComponent from "../../bases/icons/formatQuoteSVG/QuoteSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Quote',
  component: QuoteSvgComponent
};

const Template = (args) => <QuoteSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault