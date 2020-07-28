import {getUserInfo} from "../../../store/auth-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    userId: state.auth.userId,
    userInfoStatus: state.auth.userInfoStatus,
    isLoading: state.auth.isLoading

})

const ProfileContainer = connect(mapStateToProps, {getUserInfo})(Profile);

export default ProfileContainer;