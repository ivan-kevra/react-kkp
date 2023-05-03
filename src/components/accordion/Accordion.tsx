import React from "react";
import {AccordionTitle} from "./accordionTitle/AccordionTitle";
import {AccordionBody} from "./accordionBody/AccordionBody";
import {ItemType} from "../../App";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
    /**
     * Elements that are showed when accordion is opened (uncollapsed).
     * Each item should have ItemType
     */
    users: Array<ItemType>
    /**
     * callback is called when some item was clicked
     * @param value is value of clicked item
     */
    onItemClick: (value: any) => void
    /**
     * optional color of header text
     */
    value?: any
    color: string
}
export const Accordion = React.memo((props: AccordionPropsType) => {
    const clickUserHandler = () => props.onItemClick(props.value)

    return <div>
        <AccordionTitle title={props.title} onClick={() => props.onClick()}
                        color={props.color}/>
        {!props.collapsed && <AccordionBody users={props.users} onItemClick={clickUserHandler}/>}
    </div>
})



