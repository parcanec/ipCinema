import './App.css'
import { Provider } from "react-redux";
import Widget from "./components/widget.jsx";
import Header from "./components/header"
import {Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <header className="menu">
        <Header/>
      </header>
      <div className="widget">
        <Widget/>
      </div>
    </div>
  )
}

export default App