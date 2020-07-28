import React from 'react';
import style from './New.module.css';

const New = (props) => {
    return (
        <div className={style.new} >
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
};

export default New;
