import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Page from "./Pages/Page";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/dashboard/*" element={<LandingPage />}></Route>
        <Route  path="/page" element={<Page />}></Route>
        <Route  path="/" element={<LoginPage />}></Route>
        <Route  path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
