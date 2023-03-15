import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";


const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    const toggleCollapsed = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    return (
        <div className={'App'}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed} onChange={toggleCollapsed} items={[]}
                       onClick={() => {
                       }} color={''}/>
            <OnOff on={on} onChange={setOn}/>

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