import React, {useEffect, useState} from 'react';
import style from './Login.module.css'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);

    useEffect(() => {
        if(props.status === 'err'){
            setPassword('');
        }
    }, [props.status]);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // post запрос
        if (validateForm()) {
            setFormIsValid(true);
            props.login(email, password);
        } else {
            setFormIsValid(false);
        }

    };

    const onKeyPress = (event) => {
        if (event.key === 'enter') {
            onSubmit(event);
        }
    }
    const onChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    };
    return (
        <form className={style.login}  onSubmit={onSubmit} onKeyPress={onKeyPress}>
            <div className={style.row}>
                <label htmlFor="email">Email (max@test.com):</label>
                <input id='email' type="text" value={email} onChange={onChangeEmail}/>
            </div>
            <div className={style.row}>
                <label htmlFor="password">Password (12345):</label>
                <input id='password' type="text" value={password} onChange={onChangePassword}/>
            </div>
            <div className={style.row}>
                <input type="submit" value='Отправить'/>
            </div>
            {(props.loginStatus==='err') && <div className={style.error}>{props.errorText}</div>}
            {!formIsValid && <div  className={style.error}>{'Невалидный email или password'}</div>}


        </form>
    )
};

export default Login;