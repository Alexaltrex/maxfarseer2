import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let headerText = (!props.isAuth) ? 'Войти' : 'Выйти';

    const onClick = () => {
        if (props.isAuth) {
            props.logout();
        }
    };

    return (
        <header className={style.header}>
           <div onClick={onClick} className={style.login}>
               <NavLink to='/login'>{headerText}</NavLink>
           </div>
        </header>
    )
};

export default Header;