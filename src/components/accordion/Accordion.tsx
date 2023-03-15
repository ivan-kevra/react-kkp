import React from "react";
import {RatingValueType} from "../rating/Rating";

type ItemType = {
    title: string
    value: number
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements which are showed when are opened. Each item should be ItemType
     */
    items: Array<ItemType>
    /**
     * callback which is called when some item will be clicked
     */
    onClick: (value: RatingValueType) => void
    /**
     * optional color of header text
     */
    color: string
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.title} onChange={props.onChange}
                        color={props.color}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={(event) => props.onChange()}
               style={{color: props.color ? props.color : 'black'}}>
        --- {props.title} ---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}