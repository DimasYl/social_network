import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootReduxState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";


type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType> {


    componentDidMount(){
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: RootReduxState) => ({
    initialized: state.app.initialized
})
export default compose(
    connect <MapStateToPropsType,MapDispatchToPropsType,{},RootReduxState>
(mapStateToProps,{initializeApp})(App))
