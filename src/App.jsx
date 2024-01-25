import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/signIn" element={<div>Login Page</div>}/>
        <Route path="/signUp" element={<div>Sign Up Page</div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
