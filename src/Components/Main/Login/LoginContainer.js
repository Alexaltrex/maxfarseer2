import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../store/auth-reducer";

const mapStateToProps = (state) => ({
    loginStatus: state.auth.loginStatus,
    errorText: state.auth.errorText,
    isLanError: state.auth.isLanError,
    isLoading: state.auth.isLoading
});

const LoginContainer = connect(mapStateToProps, {login})(Login);

export default LoginContainer;

