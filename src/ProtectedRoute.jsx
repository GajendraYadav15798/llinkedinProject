import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loginStatus")); // Corrected localStoarge to localStorage
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <div>{Component}</div>;
};

export default ProtectedRoute;
