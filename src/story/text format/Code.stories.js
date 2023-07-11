import React from 'react';
import CodeSvgComponent from "../../bases/icons/formatCodeSVG/CodeSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/Code',
  component: CodeSvgComponent
};

const Template = (args) => <CodeSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault