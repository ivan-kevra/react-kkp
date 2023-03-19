import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 style={{color: props.color ? props.color : 'black'}}
               onClick={props.onClick}>
        --- {props.title} ---
    </h3>
}