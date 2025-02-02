import React, { useState, useRef, useEffect } from "react";
import "../../styles/Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navigate, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";

const Profile = () => {
  const storedUserInfo = localStorage.getItem("userInfo");
  const userName = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  
  const [showModal, setShowModal] = useState(false);
  const profileIconRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("logInStatus");
    localStorage.removeItem("authToken");
    localStorage.setItem("loginStatus", JSON.stringify(false));
    navigate("/login");
    setTimeout(() => {
      toast.success("Logged Out Successfully");
    }, 1000);
  };

  useEffect(() => {
    const hideModal = (e) => {
      if (profileIconRef.current.contains(e.target)) {
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <section
      className="profile"
      onClick={() => setShowModal(!showModal)}
      ref={profileIconRef}
    >
      <section className="arrowIconForDropDown">
        <ArrowDropDownIcon style={{ color: "rgba(0,0,0,0.6)" }} />
      </section>
      {showModal && (
        <div className="auth-modal">
          <div>
            <div className="for-svg-for-name">
              <AccountCircleIcon className="forSvg" />
              {userName && (
                <h6 style={{ whiteSpace: "nowrap" }}>{userName.charAt(0).toUpperCase() + userName.slice(1)}</h6>
              )}
            </div>

            <div className="btn-for-name">
              <button
                onClick={() => navigate("/MainProfile")}
                className="view-profile"
              >
                Profile
              </button>
            </div>
          </div>
          <hr />
          <div className="upper-div-main">
            <div className="upper-div">
              <h4>Account</h4>
              <p onClick={() => navigate("/trypremium")}>
                Try Premium for free
              </p>
              <p onClick={() => toast.success("Coming Soon")}>
                Setting & Privacy
              </p>
              <p onClick={() => toast.success("Coming Soon")}>Help</p>
              <p onClick={() => toast.success("Coming Soon")}>Language</p>
            </div>
            <hr />
            <div className="lower-div">
              <h4>Manage</h4>
              <p onClick={() => navigate("/")}>Post & Activity</p>
              <p onClick={() => navigate("/")}>Job Posting Account</p>
            </div>
            <hr />
            <button className="sign-out-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
