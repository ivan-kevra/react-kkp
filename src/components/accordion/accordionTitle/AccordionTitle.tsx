import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: (value: any) => void
    color?: string

}
export const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return <h3 style={{color: props.color ? props.color : 'black'}}
               onClick={props.onClick}>
        --- {props.title} ---
    </h3>
})