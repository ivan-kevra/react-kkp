import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args}  />;

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    title: 'USERS',
};


