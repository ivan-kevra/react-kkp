import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action('Rating was changed')

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args}  />;

export const EmptyUncontrolledRating = Template.bind({});
EmptyUncontrolledRating.args = {
    value: 0,
    onChange: callback
};
export const UncontrolledRating1 = Template.bind({});
UncontrolledRating1.args = {
    value: 1,
    onChange: callback
};
export const UncontrolledRating2 = Template.bind({});
UncontrolledRating2.args = {
    value: 2,
    onChange: callback
};
export const UncontrolledRating3 = Template.bind({});
UncontrolledRating3.args = {
    value: 3,
    onChange: callback
};
export const UncontrolledRating4 = Template.bind({});
UncontrolledRating4.args = {
    value: 4,
    onChange: callback
};
export const UncontrolledRating5 = Template.bind({});
UncontrolledRating5.args = {
    value: 5,
    onChange: callback
};
