import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const Rating = Template.bind({})
Rating.args = {
    title: 'Uncontrolled Rating',
}




