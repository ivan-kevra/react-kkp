import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import OnOff from "./components/onOff/OnOff";
import {string} from "prop-types";

export type UserType = {
    user: string,
    userId: number
}
const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const users: Array<UserType> = [
        {user: 'Dimych', userId: 1},
        {user: 'Valera', userId: 2},
        {user: 'Viktor', userId: 3},
    ]

    const toggleCollapsed = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    return (
        <div className={'App'}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'}
                       collapsed={accordionCollapsed}
                       onClick={toggleCollapsed}
                       users={users} color={''}
                       onItemClick={() => {
                       }}/>
            <OnOff on={on} onClick={setOn}/>

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