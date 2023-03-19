import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import OnOff from "./OnOff";
import {useState} from "react";

export default {
    title: 'Components/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    onClick: action('change onOff mode was clicked')
}

export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
    onClick: action('change onOff mode was clicked')
}

export const SetOnMode = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onClick={setOn}/>
}

