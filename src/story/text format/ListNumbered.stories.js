import React from 'react';
import ListNumberedSvgComponent from "../../bases/icons/formatListNumberedSvg/ListNumberedSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/ListNumbered',
  component: ListNumberedSvgComponent
};

const Template = (args) => <ListNumberedSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault