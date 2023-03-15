import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Rating, RatingValueType} from './Rating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const callback = action('rating was changed')

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}  />;

export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyRating.args = {
    value: 0,
    onClick: callback
};

export const Rating1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating1.args = {
    value: 1,
    onClick: callback
};
export const Rating2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating2.args = {
    value: 2,
    onClick: callback
};
export const Rating3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating3.args = {
    value: 3,
    onClick: callback
};
export const Rating4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating4.args = {
    value: 4,
    onClick: callback
};
export const Rating5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating5.args = {
    value: 5,
    onClick: callback
};


export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}
