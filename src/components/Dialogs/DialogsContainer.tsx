import React from 'react'
import {DialogsPageType, sendMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void

}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// export const withAuthRedirect(connect<MapStateToPropsType,MapDispatchToPropsType,{},RootReduxState>
// (mapStateToProps, mapDispatchToProps)(Dialogs))
//

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>
    (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)