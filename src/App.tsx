import React, {useState} from 'react';
import './App.css';
import {Rating, RatingPropsType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {Accordion} from "./Components/Accordion/Accordion";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

const App = () => {

    let [value, setValue] = useState<ValuesType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    return (
        <div>
            <Rating value={value} onClick={setValue}/>
            <UncontrolledRating/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={setAccordionCollapsed}
            />
            <OnOff on={on} onChange={setOn} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <div>{props.title}</div>
}

export default App;

