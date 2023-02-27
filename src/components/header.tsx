import React from "react";
import {Routes, Route, Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="header">
      <div><Link to={'/'}>Home</Link></div>
      <div><Link to={'/login'}>Login</Link></div>
    </header>
  )
}

export default Header

//  <Link to="/">Home</Link>
//  <Link to="/login">Login</Link>
//<Routes>
//<Route path="/" element={<Widget/>}/>
//<Route path="/login" element={<LoginPage/>}/>
//</Routes>
