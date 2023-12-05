import React from 'react';
import AddSvgComponent from "../../bases/icons/addSvg/AddSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Add',
  component: AddSvgComponent
};

const Template = (args) => <AddSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault