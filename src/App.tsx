import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
