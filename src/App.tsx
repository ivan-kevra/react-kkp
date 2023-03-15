import React from 'react';
import './App.css';
import OnOff from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";


const App = () => {
    return (
        <div className={'App'}>
            <OnOff/>

            <UncontrolledAccordion title={'Меню'}/>
            <Accordion collapsed={true} title={'Меню 2'}/>

            <UncontrolledRating/>
            <Rating value={3}/>

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