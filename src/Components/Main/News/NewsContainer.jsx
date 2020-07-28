import {connect} from "react-redux";
import News from "./News";

const mapStateToProps = (state) => ({
    news: state.news.news,
    isLoading: state.news.isLoading
})

const NewsContainer = connect(mapStateToProps, {})(News);

export default NewsContainer;