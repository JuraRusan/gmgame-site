import React from 'react';
import ListBulletedSvgComponent from "../../bases/icons/formatListBulletedSvg/ListBulletedSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/Format/ListBulleted',
  component: ListBulletedSvgComponent
};

const Template = (args) => <ListBulletedSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault