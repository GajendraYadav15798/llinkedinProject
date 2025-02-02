import React, { useState } from "react";
import '../styles/PostBody.css'
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../components/utils/config";
import { usePost } from "../components/Provider/PostInfoProvider";
import { Avatar, Divider, Snackbar } from "@mui/material";
import SingleComments from "./SingleComments,";

import { ReactComponent as LikeIcon } from "../components/assets/like.svg";
import { toast } from "react-toastify";

const PostBody = ({ likeCount, onLikeClick, liked }) => {
  const [openCommentSec, setOpenCommentSec] = useState(false);
  const loginStatus = localStorage.getItem("logInStatus");
  const [showComments, setShowComments] = useState();
  const isLoggedIn = localStorage.getItem("userInfo");
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate(null);

  const [isLiked, setIsLiked] = useState(liked);
  const [postComments, setPostComments] = useState([
    {
      name: "Paul David",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      name: "Jon Alex",
      comment:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.",
    },
    {
      name: "Brian David",
      comment:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      name: "Moosa Alexender",
      comment:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
  ]);

  const [userCommentinput, setUserCommentInput] = useState({
    name: "",
    comment: "",
  });

  const saveUserComment = (e) => {
    const { value } = e.target;
    setUserCommentInput({
      name: userName,
      comment: value,
    });
  };

  const handleNewComment = (postID) => {
    if (userCommentinput.comment) {
      setPostComments((prevState) => [userCommentinput, ...prevState]);
    }
    setUserCommentInput({
      name: "",
      comment: "",
    });
  };

  const handleShowComment = () => {
    if (isLoggedIn) {
      if (showComments) {
        setShowComments(false);
      } else {
        setShowComments(true);
      }
    }
  };

  const handleLikeClick = () => {
    onLikeClick(); // Call the callback function passed from Home.jsx
    setIsLiked(!isLiked);
  };
  return (
    <div className="page-footer">
      <div className="forShowOption">
        <div className="page-footer-option">
          <div
            className={`forLike ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            <ThumbUpOffAltIcon />
            <span>Like</span>
          </div>
        </div>
        <div className="page-footer-option">
          <div onClick={handleShowComment} className="forComment">
            <ChatBubbleOutlineIcon />
            <span>Comment</span>
          </div>
        </div>
        <div
          className="page-footer-option"
          onClick={() => toast("Comming Soon")}
        >
          <PostAddIcon />
          <span>Repost</span>
        </div>
        <div
          className="page-footer-option"
          onClick={() => toast("Comming Soon")}
        >
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
      <div className="forShowComment">
        {showComments && (
          <section className="post-comments-section">
            <div className="compose-comment">
              <Avatar />
              <input
                type="text"
                value={userCommentinput.comment}
                onChange={saveUserComment}
                placeholder="Add a comment..."
              />
              <button onClick={handleNewComment}>
                <SendIcon style={{ color: "rgba(0,0,0,0.8)" }} />
              </button>
            </div>
            {postComments.map((comment, index) => {
              return <SingleComments key={index} comment={comment} />;
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export default PostBody;
