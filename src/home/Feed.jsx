import React, { useState, useRef, useEffect } from "react";
import "../styles/Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";
import axios from "axios";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import MmsIcon from "@mui/icons-material/Mms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Feed = ({ setPostData, postData = [] }) => {
  const fileInputRef = useRef(null);
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    imageSrc: "",
    content: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userToken, setUserToken] = useState(null); // State to store the token

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "450px",
      height: "400px",
      borderRadius: "12px",
      overflowX: "hidden",
    },
  };

  const name = JSON.parse(localStorage.getItem("userInfo"));

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function afterOpenModal() {
    document.body.style.color = "rgba(0,0,0,0.9)";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  }

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.event });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleMessage = () => {
    const postId = uuidv4();
    if (userInputs.content) {
      const newPost = {
        author: {
          name: name,
        },
        content: userInputs.content,
        channel: { image: userInputs.imageSrc },
        likeCount: 3,
        _id: postId,
      };

      setPostData((prevFeedPost) => [newPost, ...prevFeedPost]);

      setUserInputs({
        imageSrc: "",
        content: "",
      });

      document.body.style.overflowY = "auto";
    }

    setIsOpen(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserInputs((prevData) => ({
        ...prevData,
        imageSrc: imageUrl,
      }));
    }
  };

  const saveUserContent = (e) => {
    const { value } = e.target;
    setUserInputs((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  // Adjust styles based on screen width
  if (window.innerWidth < 768) {
    customStyles.content.width = "350px";
  }

  // Function to delete a post
  const deletePost = async (id, token) => {
    try {
      await axios.delete(`https://academics.newtonschool.co/api/v1/linkedIn/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: "f104bi07c490",
        },
      });
      // Update the local state to remove the deleted post
      setPostData((prevPosts) => prevPosts.filter(post => post._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <AccountCircleIcon onClick={() => navigate("/mainprofile")} />
          <form className="for-creating-post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              id="newPost"
              placeholder="Start post"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Create Post"
            >
              <div
                className="modalForMedia"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <AccountCircleIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(0,0,0,0.6)",
                    marginLeft: "-10px",
                  }}
                />
                <h2
                  style={{
                    color: "black",
                    fontSize: "25px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </h2>

                <button
                  style={{
                    marginTop: "-5px",
                    marginLeft: "205px",
                    border: "none",
                    fontSize: "18px",
                  }}
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="forTextArea">
                <textarea
                  onChange={saveUserContent}
                  placeholder="What do you want to talk about?"
                  id="input-textarea"
                  cols="52"
                  rows="11"
                ></textarea>
              </div>
              <button
                className="btn-for-gallery"
                style={{ left: "-20px", top: "-6px", background: "#00000000" }}
              >
                <MmsIcon onClick={triggerImageUpload} />

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </button>
              <button
                onClick={handleMessage}
                style={{
                  right: "10px",
                  border: "1px solid blue",
                  backgroundColor: "#0a66c2",
                  position: "absolute",
                  margin: "10px 10px",
                  color: "#fff",
                  padding: "11px 11px",
                }}
              >
                Post
              </button>
            </Modal>
          </form>
        </div>

        <div className="feed-option">
          <div className="option" onClick={openModal}>
            <InsertPhotoIcon
              style={{ color: "#70b5f9", height: "25px", width: "25px" }}
            />
            <span>Media</span>
          </div>
          <div className="option" onClick={openModal}>
            <DesignServicesIcon
              style={{ color: "#a872e8", height: "25px", width: "25px" }}
            />
            <span>Design</span>
          </div>
          <div className="option" onClick={() => toast("Coming Soon")}>
            <ArticleIcon
              style={{ color: "#e16745", height: "25px", width: "25px" }}
            />
            <span>Write Article</span>
          </div>
        </div>
      </div>

      <div className="feed-posts">
        {postData && postData.map((post) => (
          <div key={post._id} className="post">
            <div className="post-author">{post.author.name}</div>
            <div className="post-content">{post.content}</div>
            {post.channel.image && <img src={post.channel.image} alt="Post" />}
            <button onClick={() => deletePost(post._id, userToken)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
