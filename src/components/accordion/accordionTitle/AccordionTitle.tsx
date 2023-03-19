import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}>--- {props.title} ---</h3>
}