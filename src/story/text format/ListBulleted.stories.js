import React from 'react';
import ListBulletedSvgComponent from "../../bases/icons/formatListBulletedSVG/ListBulletedSVG";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/ListBulleted',
  component: ListBulletedSvgComponent
};

const Template = (args) => <ListBulletedSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault