import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {Accordion} from "./Accordion";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            ...GetCategoryObj('Color')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        onItemClick: {
            ...GetCategoryObj('Event')
        },
        users: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        title: {...GetCategoryObj('Main')},

    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const callback = action('change accordion mode was clicked')
const itemCallback = action('change accordion mode was clicked')
const callbackProps = {
    onClick: callback,
    onItemClick: itemCallback,
}
const users = [
    {user: 'Dimych', userId: 1},
    {user: 'Valera', userId: 2},
    {user: 'Viktor', userId: 3}
]

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: 'Menu',
    collapsed: true,
    users: []
}
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
    users
}

export const ChangeCollapseMode: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion  {...args} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
}

ChangeCollapseMode.args = {
    title: 'DEFAULT',
    collapsed: false,
    users,
    onItemClick: itemCallback
}


