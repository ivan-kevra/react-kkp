import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {Accordion} from "./Accordion";

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const callback = action('change collapsed mode was clicked')

export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {
    title: 'COLLAPSED ACCORDION',
    collapsed: true,
    onClick: callback
}
export const UnCollapsedAccordion = Template.bind({})
UnCollapsedAccordion.args = {
    title: 'UNCOLLAPSED ACCORDION',
    collapsed: false,
    onClick: callback
}

export const ChangeCollapseMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={'DEFAULT'} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
}




