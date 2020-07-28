import React, {useEffect} from 'react';
import style from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";

const Profile = (props) => {

    useEffect(() => {
        if (props.userId) {
            props.getUserInfo(props.userId);
        }
    }, [props.userId]);

    if (props.isLoading) {
        return <Preloader/>
    }

    return (
        <>
            {props.userInfo && props.userInfoStatus === 'ok' && <div>
                <div>
                    <span>Город: </span>
                    <span>{props.userInfo.city}</span>
                </div>
                <br/>
                <div>
                    <div>Знание языков:</div>
                    <div>{props.userInfo.languages.map((el, i) => <div key={i}>{el}</div>)}</div>
                </div>
                <br/>
                <div className={style.social}>
                    {props.userInfo.social
                        .sort((a, b) => {
                            if (a.label === 'web') {
                                return -1;
                            }
                            if (b.label === 'web') {
                                return 1;
                            }
                            return 0;
                        })
                        .map((el, i) => <a key={i} href={el.link} target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/${el.label}.png`} alt=""/>
                        </a>)}
                </div>
            </div>}
            {props.userInfoStatus === 'err' && <div>Пользователь не найден</div>}
        </>
    )
};

export default Profile;