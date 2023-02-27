import React from "react";
import {Routes, Route, Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <div>Home</div>
            <div>Login</div>
        </div>
    )
}

export default Header

//  <Link to="/">Home</Link>
//  <Link to="/login">Login</Link>
//<Routes>
//<Route path="/" element={<Widget/>}/>
//<Route path="/login" element={<LoginPage/>}/>
//</Routes>
