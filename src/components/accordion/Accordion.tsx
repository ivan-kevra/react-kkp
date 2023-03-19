import React from "react";
import {AccordionTitle} from "./accordionTitle/AccordionTitle";
import {AccordionBody} from "./accordionBody/AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}
export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.title} onClick={() => props.onClick()}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}



