import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    const collapseHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.title} collapseBody={collapseHandler}/>
        {collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapseBody: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.collapseBody}>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}