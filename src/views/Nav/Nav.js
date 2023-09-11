import React from 'react'

import classNames from 'classnames/bind';
import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

class Nav extends React.Component {

    state = {}
    render() {
        return (
            <div className={cx("topnav")}>
                <NavLink to="/" className={({ isActive }) => isActive ? cx('active') : ''} >Home</NavLink>
                <NavLink to="/todos" className={({ isActive }) => isActive ? cx('active') : ''}>Todos</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? cx('active') : ''}>About</NavLink>
                <NavLink to="/user" className={({ isActive }) => isActive ? cx('active') : ''}>Users</NavLink>
            </div >
        );
    }
}

export default Nav;