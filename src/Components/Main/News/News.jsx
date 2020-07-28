import React from 'react';
import New from "./New/New";
import Preloader from "../../common/Preloader/Preloader";

const News = (props) => {
    let newsElements = props.news.map(el => <New key={el.id} title={el.title} text={el.text}/>);
    if (props.isLoading) {
        return <Preloader/>
    }

    return (
        <>
            <div>{newsElements}</div>
            <div>Всего новостей {props.news.length}</div>
        </>
    )
};

export default News;