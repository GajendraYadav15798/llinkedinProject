import React, { useState, useRef } from "react";
import "../styles/mainprofile.css";
import { Navbar } from "../components/navbar/Navbar";
import { Avatar } from "@mui/material";
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
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { toast } from "react-toastify";

const MainProfile = (props) => {
  // Safely parse the user info
  const userInfo = localStorage.getItem("userInfo"); // Corrected typo here
  let name = null;

  if (userInfo) {
    try {
      name = JSON.parse(userInfo);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Optionally clear the corrupted data
      localStorage.removeItem("userInfo"); // Corrected typo here
    }
  }

  const imageInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleProfileImageClick = () => {
    imageInputRef.current.click(); // Trigger the hidden input element
  };

  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowing1, setIsFollowing1] = useState(false);
  const [isFollowing2, setIsFollowing2] = useState(false);
  const [isFollowing3, setIsFollowing3] = useState(false);

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

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-main-background">
        <div className="profile-main">
          <div className="profile-container1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdDKdnBEy9mi-nUf51LwAMiB5Md_83devhmit2xo6KCFpXqDf1y5fxF6nbA&s"
              className="main-background-image"
              alt="backgroundImage"
            />
            <div className="profile-container-inner">
              <div className="profile-pic-container">
                {selectedImage ? (
                  <Avatar
                    src={URL.createObjectURL(selectedImage)}
                    sx={{ width: 150, height: 150 }}
                    className="profile-pic"
                    alt="userProfile"
                    onClick={handleProfileImageClick}
                  />
                ) : (
                  <Avatar
                    sx={{ width: 150, height: 150 }}
                    className="profile-pic"
                    alt="userProfile"
                    onClick={handleProfileImageClick}
                  />
                )}
              </div>
              <div className="forImageUpload">
                {/* <AddAPhotoIcon onClick={handleProfileImageClick} /> */}
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }} // Hide the input element
                />
              </div>
              <h1 style={{ marginTop: "15px" }}>
                {
                  name
                   }
              </h1>
              <b>
                BCA Graduate ,JAVA , HTML ,CSS ,Bootstrap ,
                JavaScript , Github , React 
              </b>
              <p> Jaipur,Rajasthan, India</p>
              <div className="mutual-connection">
                <img src={imageFile2} alt="" />
                <span>101 mutual connection: Anand Sir</span>
              </div>
              <div className="profile-btn"></div>
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
            <div className="profile-dec-row">
              <img src={imageFile5} alt="" />
              <div>
                <h3>Lead Front-End Developer</h3>
                <b>Microsoft &middot; full-time</b>
                <b>Feb 2023 - Present &middot; 1 years</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </p>
                <hr />
              </div>
            </div>
            <div className="profile-dec-row">
              <img src={imageFile6} alt="" />
              <div>
                <h3> Front-End Developer</h3>
                <b>Slack &middot; full-time</b>
                <b>June 2021 - Jan 2024 &middot; 2 years</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </p>
                <hr />
              </div>
            </div>
            <div className="profile-dec-row">
              <img src={imageFile7} alt="" />
              <div>
                <h3>Web Developer</h3>
                <b>Google Inc &middot; full-time</b>
                <b>Sep 2022 - May 2024 &middot; 1.5 years</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="profile-description">
            <h2>Education</h2>
            <div className="profile-dec-row">
              <img src={imageFile9} alt="" />
              <div>
                <h3> Chandigarh University</h3>
                <b>BCA, Software Engineering</b>
                <b>2021 - 2024</b>
                <hr />
              </div>
            </div>
            <div className="profile-dec-row">
              <img src={imageFile10} alt="" />
              <div>
                <h3>Manipal University</h3>
                <b>Computer </b>
                <b>2018 - 2022</b>
                <hr />
              </div>
            </div>
            <div className="profile-dec-row">
              <img src={imageFile11} alt="" />
              <div>
                <h3>Purnima University</h3>
                <b>Senior secondary High School</b>
                <b>2010 - 2024</b>
              </div>
            </div>
          </div>
          <div className="profile-description">
            <h2>Skills</h2>
            <a href="#" className="skills-btn">
              Leadership
            </a>
            <a href="#" className="skills-btn">
              Web Design
            </a>
            <a href="#" className="skills-btn">
              Development
            </a>
            <a href="#" className="skills-btn">
              Communication
            </a>
            <a href="#" className="skills-btn">
              UI/UX
            </a>
            <a href="#" className="skills-btn">
              Planning
            </a>
            <a href="#" className="skills-btn">
              Javascript
            </a>
            <a href="#" className="skills-btn">
              HTML
            </a>
            <a href="#" className="skills-btn">
              CSS
            </a>
            <a href="#" className="skills-btn">
              React
            </a>
            <a href="#" className="skills-btn">
              MongoDB
            </a>
          </div>
          <div className="profile-description">
            <h2>Languages</h2>
            <a href="#" className="language-btn">
              English
            </a>
            <a href="#" className="language-btn">
              Hindi
            </a>
            <a href="#" className="language-btn">
              Marathi
            </a>
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
                onClick={() => toast.success("Coming Soon")}
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
                <p>Full Stack Developer</p>
                <button href="#" onClick={toggleFollow1}>
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile14} alt="" />
              <div>
                <h2>Himanshi Sharma</h2>
                <p>Studied from University of JERC</p>
                <button href="#" onClick={toggleFollow2}>
                  {isFollowing1 ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile15} alt="" />
              <div>
                <h2> Devanshu Choudhary</h2>
                <p>Studied from Engineering Rajasthan University</p>
                <button href="#" onClick={toggleFollow3}>
                  {isFollowing2 ? "Following" : "Follow"}
                </button>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={imageFile2} alt="" />
              <div>
                <h2> Vijay Singh</h2>
                <p>Head of Business Manager at Chandigarh</p>
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

export default MainProfile;
