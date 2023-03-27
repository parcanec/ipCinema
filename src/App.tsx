import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/home";
import LoginPage from "./components/login";
//mport store from "./store/store.js"
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
