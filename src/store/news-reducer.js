import {newsAPI} from "../DAL/api";

const SET_NEWS = 'SET-NEWS';
const TOGGLE_LOADING = 'TOGGLE-LOADING';

let stateInitial = {
    isLoading: false,
    news: []
};

const newsReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {...state, news: action.news}
        }

        case TOGGLE_LOADING: {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state;
    }
};

export const setNews = (news) => ({type: SET_NEWS, news});
export const toggleLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});

export const getNews = () => dispatch => {
    dispatch(toggleLoading(true));
    newsAPI.getNews()
        .then(data => {
            if (data.status === 'ok') {
                dispatch(toggleLoading(false));
                dispatch(setNews(data.data));
            }
        });
};

export default newsReducer;