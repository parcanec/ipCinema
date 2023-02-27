import './App.css'
import Home from "./components/home";
import Header from "./components/header"
import {Routes, Route, Link} from "react-router-dom"
import LoginPage from "./components/login";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App