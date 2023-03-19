import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const AccordionMode = Template.bind({})
AccordionMode.args = {
    title: 'Uncontrolled Accordion',
}




