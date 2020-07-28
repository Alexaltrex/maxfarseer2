import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import style from './Main.module.css';
import LoginContainer from "./Login/LoginContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import NewsContainer from "./News/NewsContainer";
import About from "./About/About";


const Main = (props) => {

    useEffect(() => {
        props.getNews();
    }, []);

    return (
        <main className={style.main}>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/news' component={NewsContainer}/>
                <Route path='/profile'>
                    {props.isAuth ? <ProfileContainer/> : <Redirect to='/login'/>}
                </Route>
                {/*<Route path='/login' component={LoginContainer}/>*/}
                <Route path='/login'>
                    {!props.isAuth ? <LoginContainer/> : <Redirect to='/profile'/>}
                </Route>
            </Switch>
        </main>
    )
};

export default Main;

