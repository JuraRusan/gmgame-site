import React from 'react';
import ImageSvgComponent from "../../bases/icons/imageSvg/ImageSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Image',
  component: ImageSvgComponent
};

const Template = (args) => <ImageSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault