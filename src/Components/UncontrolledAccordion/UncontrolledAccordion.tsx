import React, {useState} from "react";


export const UncontrolledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={'Uncontrolled Accordion'}/>
            <button onClick={onClickHandler}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
    // }

}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<h3>{props.title}</h3>)
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