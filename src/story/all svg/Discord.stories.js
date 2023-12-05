import React from 'react';
import DiscordSvgComponent from "../../bases/icons/discordSvg/DiscordSvg";
import {arrayDefault} from "../IconDefaultStorybookTypes";

export default {
  title: 'UI/Svg/All/Discord',
  component: DiscordSvgComponent
};

const Template = (args) => <DiscordSvgComponent {...args}/>

export const Default = Template.bind({})
Default.args = arrayDefault