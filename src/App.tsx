import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import OnOff from "./components/onOff/OnOff";


const App = () => {
    return (
        <div>
            <OnOff selected={true}/>
            <OnOff selected={false}/>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Меню'} collapsed={true}/>
            <Accordion title={'Users '} collapsed={false}/>
            Article 2
            <Rating value={4}/>
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