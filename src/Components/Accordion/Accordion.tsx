import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    const onChangeHandler = () => {
        props.onChange(!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={onChangeHandler}


            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
    // }

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    const onChangeHandler = () => {
        props.onChange()
    }
    return <h3 onClick={onChangeHandler}>
        {props.title}
    </h3>
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}