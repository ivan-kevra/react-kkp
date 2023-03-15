import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./uncontrolledOnOff";

export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('on or off clicked')

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args}  />;

export const OnMode = Template.bind({});
OnMode.args = {
    onChange: callback,
    defaultOn: true
}
export const OffMode = Template.bind({});
OffMode.args = {
    onChange: callback,
    defaultOn: false
}
