import React from "react";
import {Routes, Route, Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/login'}>Login</Link></div>
        </div>
    )
}

export default Header
