import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { NewPost } from "./pages/NewPost/NewPost";
import { Profile } from "./pages/Profile/Profile";
import { Profiles } from "./pages/Profiles/Profiles";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<NewPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
