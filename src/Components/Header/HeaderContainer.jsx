import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../store/auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const HeaderContainer = connect(mapStateToProps, {logout})(Header);

export default HeaderContainer;