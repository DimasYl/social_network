import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {HeaderPropsType} from "./HeaderContainer";


const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img alt='' src='https://forse-112-ua.at.ua/_ld/0/83573628.png'/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;