import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../store/auth-reducer";

const mapStateToProps = (state) => ({
    //email: state.auth.email,
    //password: state.auth.password,
    loginStatus: state.auth.loginStatus,
    errorText: state.auth.errorText
});

const LoginContainer = connect(mapStateToProps, {login})(Login);

export default LoginContainer;

