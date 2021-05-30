import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

type PathParamsType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 15920
            if (!userId){
                this.props.history.push('/login')
            }
                }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)
// export default connect<MapStateToPropsType, MapDispatchPropsType,{},RootReduxState>
//     (mapStateToProps, {getUserProfile})(AuthRedirectComponent)


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, RootReduxState>
    (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)