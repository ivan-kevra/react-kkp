import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('on or off clicked')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}  />;

export const OnMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMode.args = {
    on: true,
    onChange: callback
};
export const OffMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OffMode.args = {
    on: false,
    onChange: callback
};


export const SetOnOff = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}
