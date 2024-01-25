import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/signIn" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
