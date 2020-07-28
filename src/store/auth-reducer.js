import {authAPI} from "../DAL/api";

const SET_IS_AUTH = 'auth/SET-IS-AUTH';
const SET_USER_ID = 'auth/SET-USER-ID';
const LOGOUT = 'auth/LOGOUT';
const SET_LOGIN_STATUS = 'auth/SET-LOGIN-STATUS';
const SET_ERROR_TEXT = 'auth/SET-ERROR-TEXT';
const SET_USER_INFO = 'auth/SET-USER-INFO';
const SET_USER_INFO_STATUS = 'auth/SET-USER-INFO-STATUS';
const TOGGLE_LOADING = 'auth/TOGGLE_LOADING';

let initialState = {
    isAuth: false,
    email: null,// нужен ли?
    password: null,// нужен ли?
    userId: null,
    loginStatus: null, // статус ответа с сервера при логинизации
    errorText: null, // выводимый в компонетне Login тект ошибки
    userInfo: null, // данные о пользователи
    userInfoStatus: null, // статус запроса данных о пользователе
    isLoading: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH: {
            return {...state, isAuth: action.isAuth}
        }
        case SET_USER_ID: {
            return {...state, userId: action.userId}
        }
        case LOGOUT: {
            return {...state, isAuth: false, userId: null}
        }
        case SET_LOGIN_STATUS: {
            return {...state, loginStatus: action.loginStatus}
        }
        case SET_ERROR_TEXT: {
            switch (action.errorText) {
                case "wrong_email_or_password": {
                    return {...state, errorText: 'Имя пользователя или пароль введены не верно'}
                }
                default:
                    return state;
            }
        }
        case SET_USER_INFO: {
            return {...state, userInfo: action.userInfo}
        }
        case SET_USER_INFO_STATUS: {
            return {...state, userInfoStatus: action.userInfoStatus}
        }
        case TOGGLE_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state;
    }
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});
export const logout = () => ({type: LOGOUT});
export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus: loginStatus});
export const setErrorText = (errorText) => ({type: SET_ERROR_TEXT, errorText});
export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo});
export const setUserInfoStatus = (userInfoStatus) => ({type: SET_USER_INFO_STATUS, userInfoStatus});
export const toggleLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});

export const login = (email, password) => async (dispatch) => {
    let data = await authAPI.login(email, password);
    dispatch(setLoginStatus(data.status));
    if (data.status === 'ok') {
        dispatch(setIsAuth(true));
        dispatch(setUserId(data.data.id));
    } else {
        dispatch(setErrorText(data.message));
    }
}

export const getUserInfo = (userId) => async (dispatch) => {
    dispatch(toggleLoading(true));
    let data = await authAPI.getUserInfo(userId);
    if (data.status === 'ok') {
        dispatch(setUserInfo(data.data));
        dispatch(setUserInfoStatus('ok'));
        dispatch(toggleLoading(false));
    } else {
        dispatch(setUserInfoStatus('err'));
        dispatch(toggleLoading(false));
    }

}

export default authReducer;