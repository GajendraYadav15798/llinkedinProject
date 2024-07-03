import React, { useState } from "react";
import "../../styles/login.css";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const signIn = async (userInfo) => {
    userInfo.appType = "linkedin";
    try {
      const headerConfig = getHeaderWithProjectIDAndBody();
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        userInfo,
        headerConfig
      );
      console.log("res", res);

      if (res && res.data && res.data.token) {
        setHasError(false);
        setErrMessage("Logged in successfully");
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.data.user.name));
        navigate("/");
        toast("Logged in successfully");
      } else {
        setHasError(true);
        setErrMessage("Login Failed: Invalid Username or Password");
        toast.error("Login Failed: Invalid Username or Password");
      }
    } catch (err) {
      setHasError(true);
      setErrMessage("Login Failed: " + err.message);
      toast.error("Login Failed: Invalid Username or Password");
      console.log(err);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      if (!isValidEmail(value)) {
        setEmailErr("Please enter a valid email address.");
      } else {
        setEmailErr(false);
      }
    }
    if (name === "password") {
      setPassword(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasDigit = /\d/.test(value);
      if (
        value.length < 8 ||
        !hasSpecialChar ||
        !hasUpperCase ||
        !hasLowerCase ||
        !hasDigit
      ) {
        setPasswordErr(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        );
      } else {
        setPasswordErr(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <div className="login-main">
      <div className="linkedinLogin">
        <Link to="/">
          <LinkedingLogo />
        </Link>
      </div>
      <div className="second-div">
        <div className="loginForm">
          <h1>
            Find jobs through your <br /> community
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <div className="text-input-flex">
              <input
                className="text-color"
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            {emailErr && <p className="error-message">{emailErr}</p>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <div className="text-input-flex">
              <input
                id="password"
                className="text-color"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            {passwordErr && <p className="error-message">{passwordErr}</p>}
            <br />
            {hasError && <p className="error-message">{errMessage}</p>}
            <Link className="forgotLink" to="/ForgotPass">
              Forgot Password?
            </Link>
            <br />
            <button type="submit" className="signIn-button">
              Sign In
            </button>
          </form>
          <Link to="/Signup">
            <button className="joinNow-button">New to LinkedIn</button>
          </Link>
        </div>
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="LinkedIn Image"
        />
      </div>
    </div>
  );
};

export default Login;
