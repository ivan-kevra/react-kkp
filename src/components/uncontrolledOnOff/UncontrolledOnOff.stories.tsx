import {ComponentMeta, ComponentStory} from "@storybook/react";
import UncontrolledOnOff from "./uncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

const callback = action('onOff change mode clicked')

export const Rating = Template.bind({})
Rating.args = {
    onChange: callback
}




