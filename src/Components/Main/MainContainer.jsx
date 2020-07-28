import {connect} from "react-redux";
import {getNews} from "../../store/news-reducer";
import Main from "./Main";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const MainContainer = connect(mapStateToProps, {getNews})(Main);

export default MainContainer;