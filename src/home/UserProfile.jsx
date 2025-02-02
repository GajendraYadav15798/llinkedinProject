import "../styles/UserProfile.css";
import { Navbar } from "../components/navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Button, CircularProgress, Divider } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DoneIcon from "@mui/icons-material/Done";
import imageFile from "../images/user-1.png";
import imageFile2 from "../images/user-2.png";
import imageFile3 from "../images/connect.png";
import imageFile4 from "../images/chat.png";
import imageFile5 from "../images/microsoft.png";
import imageFile6 from "../images/slack.png";
import imageFile7 from "../images/google.png";
import imageFile8 from "../images/right-arrow.png";
import imageFile9 from "../images/stanford.png";
import imageFile10 from "../images/north.png";
import imageFile11 from "../images/mit.png";
import imageFile12 from "../images/mi-logo.png";
import imageFile13 from "../images/user-3.png";
import imageFile14 from "../images/user-4.png";
import imageFile15 from "../images/user-5.png";
import imageFile16 from "../images/logo.png";
import imageFile17 from "../images/otherProfileback.webp";
import { ReactComponent as AdditionIcon } from "../components/assets/addition.svg";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getAuthHeaderConfig,
  getHeaderWithProjectIDAndBody,
  getProfileById,
} from "../components/utils/config"
import { useParams } from "react-router-dom";
import { followUser, unfollowUser } from "../components/utils/getFollow";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const { id } = useParams();
  const [userNotFound, setUserNotFound] = useState(false);
  const fetchById = async () => {
    try {
      const res = await getProfileById(id);
      console.log(res);
      setUserInfo(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  const name = JSON.parse(localStorage.getItem("userInfo"));

  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowing1, setIsFollowing1] = useState(false);
  const [isFollowing2, setIsFollowing2] = useState(false);
  const [isFollowing3, setIsFollowing3] = useState(false);
  const [isFollowing4, setIsFollowing4] = useState(false);

  const toggleFollow1 = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  const toggleFollow2 = () => {
    setIsFollowing1((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow3 = () => {
    setIsFollowing2((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow4 = () => {
    setIsFollowing3((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow5 = () => {
    setIsFollowing4((prevIsFollowing) => !prevIsFollowing);
  };

  const handleFollowUser = async () => {
    try {
      setFollowLoading(true);
      let res;
      if (userInfo.isFollowed) {
        res = await unfollowUser(id);
      } else {
        res = await followUser(id);
      }

      if (res.status === "success") {
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          isFollowed: !prevInfo.isFollowed,
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFollowLoading(false);
    }
  };
  return (
    <div className="profile-container">
      <Navbar />

      <div className="profile-main-background">
        <div className="profile-main">
          <div className="profile-container1">
            <img
              src="../images/profileBackgroundImage.jpg"
              className="main-background-image"
              alt="backgroundImage"
            />
            <div className="profile-container-user">
              <img
                src={userInfo?.profileImage}
                className="profile-pic-user"
                alt="userProfile"
              />
              <h1>{userInfo?.name}</h1>
              <b>
              BCA Graduate  JAVA , HTML , CSS , Bootstrap , JavaScript ,
              Github , React
              </b>
              <p>
                <a style={{ listStyle: "none" }}>Email- {userInfo?.email}</a>
                <br />
                <a style={{ listStyle: "none" }}>
                  Contact info- {userInfo?.phone}
                </a>
              </p>
              <div className="mutual-connection">
                <img src={imageFile2} alt="" />
                <span>1 mutual connection: Adrash Gupta</span>
              </div>
              <div className="profile-btn" style={{ borderRadius: "13px" }}>
                <Button
                  variant={userInfo?.isFollowed ? "outlined" : "contained"}
                  sx={{
                    borderRadius: "25px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                  onClick={handleFollowUser}
                >
                  {followLoading ? (
                    <CircularProgress
                      style={{ width: "24px", height: "24px" }}
                      color="inherit"
                    />
                  ) : !userInfo?.isFollowed ? (
                    <>
                      <PersonAddIcon />&nbsp; Follow
                    </>
                  ) : (
                    <>
                      <DoneIcon />&nbsp; Following{" "}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="profile-description">
            <h2>About</h2>
            <p>
              Eager to learn new tech skills. Seeking a position in a dynamic
              organization to do technical and practical project and to enhance
              and apply skills.
            </p>
          </div>
          <div className="profile-description">
            <h2>Experience</h2>
            {userInfo?.workExperience?.map((info, i) => (
              <div className="profile-dec-row" key={i}>
                <img src={imageFile5} alt="" />
                <div>
                  <h3>{info.companyName}</h3>
                  <b>{info.designation} &middot; full-time</b>
                  <b>
                    {new Date(info.startDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      year: "numeric",
                    })}
                    &nbsp;-&nbsp;
                    {new Date(info.endDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                  </b>
                  <p>
                    {userInfo.description}
                    Computer programming is the process of performing a
                    particular computation, usually by designing and building an
                    executable computer program.
                  </p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="profile-description">
            <h2>Education</h2>
            {userInfo?.education?.map((info, i) => (
              <div className="profile-dec-row" key={i}>
                <img src={imageFile9} alt="" />
                <div>
                  <h3>{info.schoolName}</h3>
                  <b>{info.degree}</b>
                  <b>
                    {new Date(info.startDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      year: "numeric",
                    })}
                    &nbsp;-&nbsp;
                    {new Date(info.endDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                  </b>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="profile-description">
            <h2>Skills</h2>

            {userInfo?.skills?.map((info, i) => (
              <a href="#" className="skills-btn" key={i}>
                {info}
              </a>
            ))}
          </div>
        </div>

        {/* profilesidbar */}

        <div className="profile-sidebar">
          <div className="sidebar-ad">
            <small className="small">Ad &middot; &middot; &middot; </small>
            <p>Master the 5 principles of web design</p>
            <div className="container-image">
              <img src={imageFile} alt="" />
              <img src={imageFile12} alt="" />
            </div>
            <div className="container-image2">
              <b>Brand and Demand in Xiaomi</b>
              <a
                href="#"
                className="learn-more-link"
                onClick={() => toast("Comming Soon")}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="sidebar-people">
            <h3>People you may know</h3>
            <div className="sidebar-people-row">
              <img src={imageFile13} alt="" />
              <div>
                <h2> Nikhil</h2>
                <p>Head of Marketing at Rajasthan</p>
                <button href="#" onClick={toggleFollow1}>
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile14} alt="" />
              <div>
                <h2> Himanshi Sharma</h2>
                <p>Studied from University of Chandigarh</p>
                <button href="#" onClick={toggleFollow2}>
                  {" "}
                  {isFollowing1 ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile15} alt="" />
              <div>
                <h2> Rahul Sharma</h2>
                <p>Studied from Engineering JERC</p>
                <button href="#" onClick={toggleFollow3}>
                  {isFollowing2 ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile2} alt="" />
              <div>
                <h2> Vijay Singh</h2>
                <p>Head of Business Manger at Rajasthan</p>
                <button href="#" onClick={toggleFollow4}>
                  {isFollowing3 ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <div className="sidebar-useful-links">
          <a href="#" className="footer-links">
            About
          </a>
          <a href="#" className="footer-links">
            Accessibility
          </a>
          <a href="#" className="footer-links">
            Talent Solutions
          </a>
          <a href="#" className="footer-links">
            Community Guidelines
          </a>
          <a href="#" className="footer-links">
            Careers
          </a>
          <a href="#" className="footer-links">
            Marketing Solutions
          </a>
          <a href="#" className="footer-links">
            Privacy & Terms{" "}
          </a>
          <a href="#" className="footer-links">
            Ad Choices
          </a>
          <a href="#" className="footer-links">
            Advertising
          </a>
          <a href="#" className="footer-links">
            Sales Solutions
          </a>
          <a href="#" className="footer-links">
            Mobile
          </a>
          <a href="#" className="footer-links">
            Small Business
          </a>
          <a href="#" className="footer-links">
            Safety Center
          </a>

          <div className="copyright-msg">
            <img src={imageFile16} alt="" />
            <p>Linkedin &#169; 2022. All right reserved</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserProfile;
