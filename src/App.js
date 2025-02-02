import React, { useEffect, useState } from "react";
import "../src/styles/App.css"
import { Navbar } from "./components/navbar/Navbar";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../src/home/Home";
import MyNetwork from "./components/pages/MyNetwork";
import Messaging from "./components/pages/Messaging";
import Notification from "./components/pages/Notification";
import Jobs from "./components/pages/Jobs";
import TryPremium from "./components/pages/TryPremium";
import Me from "./components/pages/Me";
import ForBusiness from "./components/pages/ForBusiness";
import Login from "./components/login/Login";
import SideBar from "../src/home/SideBar";
import Feed from "../src/home/Feed"
import Widget from "../src/home/Widget";
import Signup from "./components/login/Signup";
import { Navigate } from "react-router-dom";
import ForgotPass from "./components/login/ForgotPass";
import MainProfile from "../src/home/MainProfile";
import HomeRoute from "./components/HomeRoute";
import { SearchProvider } from "./components/SearchContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const name = JSON.parse(localStorage.getItem("userInfo"));
  const isLoggedIn = localStorage.getItem("logInStatus");

  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="*" element={<HomeRoute />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to={"/"} /> : <Signup />}
          />
          <Route
            path="/forgotpass"
            element={isLoggedIn ? <Navigate to={"/"} /> : <ForgotPass />}
          />
        </Routes>
        <ToastContainer autoClose={3000} />
      </SearchProvider>
    </>
  );
}

export default App;
