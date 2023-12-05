import React from 'react';
import MapSvgComponent from "../../bases/icons/mapSvg/MapSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Map',
  component: MapSvgComponent
};

const Template = (args) => <MapSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault