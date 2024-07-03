import React from "react";
import "../styles/sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/MainProfile');
  };

  // Retrieve name from localStorage and parse it
  const userInfo = localStorage.getItem("userInfo");
  const name = userInfo ? JSON.parse(userInfo) : null;

  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhSoAu9trZp3kFHK3FWujNrNtwptoNlK36udC8AGhRlP-En6L3Q9AzlnrRQ&s"
          alt="image"
        />
        <div className="profile_details">
          <AccountCircleIcon className="forCirleIcon" onClick={() => navigate('/mainprofile')} />
          {/* Check if name is not null or undefined before accessing its properties */}
          {name && (
            <h4 className="nameDynamic" onClick={handleClick}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h4>
          )}
          <p>
            BCA Graduate  JAVA , HTML , CSS , Bootstrap , JavaScript ,
            Github , React 
          </p>
        </div>

        <div className="profile_stats">
          <span>Who viewed your profile</span>
          <span className="stat-number">121</span>
        </div>
        <div className="profile_stats">
          <span>Impression on your post</span>
          <span className="imp-number">140</span>
        </div>
        <div className="profile_stats">
          <span>
            Connection
            <br />
            <b>Grow your Network</b>
          </span>
          <span className="stat-number">150</span>
        </div>
      </div>
      <div className="sidebar-recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>Javascript
        </p>
        <p className="hash">
          <span>#</span>React Developers
        </p>
        <p className="hash">
          <span>#</span>Web Development
        </p>
        <p className="hash">
          <span>#</span>branding
        </p>
        <p className="hash">
          <span>#</span>Programming
        </p>
      </div>
    </div>
  );
};

export default SideBar;
