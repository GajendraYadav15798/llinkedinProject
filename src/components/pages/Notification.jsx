import React from "react";
import { Navbar } from "../navbar/Navbar";
import "../../styles/notification.css";
import { useNavigate } from "react-router-dom";
import user1 from "../../images/user-1.png";
import user2 from "../../images/user-2.png";
import user3 from "../../images/user-3.png";
import user4 from "../../images/user-4.png";
import user5 from "../../images/user-5.png";

const Notification = () => {
  const navigate = useNavigate(null);

  return (
    <main>
      <Navbar />
      <div className="notifications-main-div">
        <div className="noti-1">
          <h5>
            Manage your <br /> Notifications
          </h5>
          {/* <p>View Settings</p> */}
        </div>
        <div className="noti-2">
          <div className="content">
            <button className="allBtn">All Notification</button>
          </div>
          <div className="dataNoti">
            <a href="#" className="forNoti-1">
              <img className="user1" src={user1} alt="" />
              <p
                className="user1ParaMedia"
                style={{
                  fontSize: "12px",
                  margin: "15px 0px",
                  fontWeight: "600",
                }}
              >
              Vacancies for both new graduates and seasoned professionals, with the option to work remotely.
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user2} alt="" />
              <p
                style={{
                  fontSize: "12px",
                  margin: "15px 0px",
                  fontWeight: "600",
                }}
              >
              Job opportunities for freshers and seasoned experts, with remote work as an option.
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user3} alt="" />
              <p
                style={{
                  fontSize: "12px",
                  margin: "15px 0px",
                  fontWeight: "600",
                }}
              >
              Multiple positions are available, welcoming both fresh graduates and seasoned professionals, with work-from-home options included.
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user4} alt="" />
              <p
                style={{
                  fontSize: "12px",
                  margin: "15px 0px",
                  fontWeight: "600",
                }}
              >
              Job openings for entry-level and experienced professionals, with remote work possibilities.
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user5} alt="" />
              <p
                style={{
                  fontSize: "12px",
                  margin: "15px 0px",
                  fontWeight: "600",
                }}
              >
              Seeking freshers and experienced candidates for various roles, offering work-from-home opportunities.
              </p>
            </a>
          </div>
        </div>
        <div className="noti-3">
          <p className="p1"> Newton Boost your job search with Premium</p>
          <p className="p2">see who's view your in last week </p>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn-free"
              onClick={() => navigate("/trypremium")}
            >
              Try for free!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notification;
