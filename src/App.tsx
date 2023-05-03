import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import OnOff from "./components/onOff/OnOff";
import {string} from "prop-types";
import {Select} from "./components/select/Select";

export type ItemType = {
    title: string,
    value: any
}
const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const users: Array<ItemType> = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Viktor', value: 3},
    ]

    const toggleCollapsed = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    return (
        <div className={'App'}>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion title={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={toggleCollapsed}*/}
            {/*           users={users} color={''}*/}
            {/*           onItemClick={() => {*/}
            {/*           }}*/}
            {/*/>*/}
            {/*<OnOff on={on} onClick={setOn}/>*/}
            {/*<Select items={users} />*/}

        </div>
    );
}

export default App;


type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}