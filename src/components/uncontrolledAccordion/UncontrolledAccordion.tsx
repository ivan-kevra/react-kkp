import React, {useReducer} from "react";
import {reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = React.memo((props: UncontrolledAccordionPropsType) => {

    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapseHandler = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return <div>
        <AccordionTitle title={props.title} onClick={collapseHandler}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
})

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}>{props.title}</h3>
})

const AccordionBody = React.memo(() => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
})