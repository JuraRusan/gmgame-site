import React from 'react';
import FaqSvgComponent from "../../bases/icons/faqSvg/FaqSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Faq',
  component: FaqSvgComponent
};

const Template = (args) => <FaqSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault