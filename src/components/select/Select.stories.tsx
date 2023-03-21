import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";
import {ItemType} from "../../App";
import {useState} from "react";

export default {
    title: 'Components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const items: Array<ItemType> = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'},
]

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select onChange={setValue} items={items} value={value}/>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select onChange={setValue} items={items} value={value}/>

}

