import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color', ...GetCategoryObj('Color')
        },
        onChange: {
            control: {...GetCategoryObj('Event')}
        },
        onClick: {
            control: {...GetCategoryObj('Event')}
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        title: {...GetCategoryObj('Main')},
    }
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onChangeCallback = action('accordion changed')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}  />;
const callbacksProps = {
    onClick: callback,
    onChange: onChangeCallback
}


export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    ...callbacksProps,
    title: 'Menu',
    collapsed: true,
    items: [],

};
export const UnCollapsedAccordion = Template.bind({});
UnCollapsedAccordion.args = {
    ...callbacksProps,
    title: 'Users',
    collapsed: false,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ],
};

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
    )
}
ModeChanging.args = {
    title: 'Menu',
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ],
    onClick: callback
}

