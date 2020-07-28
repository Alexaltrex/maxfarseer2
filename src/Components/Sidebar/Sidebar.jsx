import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <nav className={style.sidebar}>
            <NavLink to='/about' className={style.link} activeClassName={style.activeLink}>Описание</NavLink>
            <NavLink to='/profile' className={style.link} activeClassName={style.activeLink}>Профиль</NavLink>
            <NavLink to='/news' className={style.link} activeClassName={style.activeLink}>Новости</NavLink>
            {/*<NavLink to='/login' className={style.link} activeClassName={style.activeLink}>Войти</NavLink>*/}
        </nav>
    )
};

export default Sidebar;