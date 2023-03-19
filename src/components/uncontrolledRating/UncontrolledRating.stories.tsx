import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;
const callback = action('change rating was clicked')

export const Rating1 = Template.bind({})
Rating1.args = {
    defaultValue: 1,
    onChange: callback
}

export const Rating2 = Template.bind({})
Rating2.args = {
    defaultValue: 2,
    onChange: callback
}

export const Rating3 = Template.bind({})
Rating3.args = {
    defaultValue: 3,
    onChange: callback
}

export const Rating4 = Template.bind({})
Rating4.args = {
    defaultValue: 4,
    onChange: callback
}

export const Rating5 = Template.bind({})
Rating5.args = {
    defaultValue: 5,
    onChange: callback
}




