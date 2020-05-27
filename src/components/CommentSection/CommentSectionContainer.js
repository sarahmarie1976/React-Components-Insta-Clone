// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";
import LikeSection from "../PostsContainer/LikeSection";

const CommentSection = props => {
  // Add state for the comments


  return (
		<div>
			{/* map through the comments data and return the Comment component */}
			{props.comments.map((comment, index) => {
				return <Comment key={`${comment.username}-${index}`} comment={comment} />;
			})}
      <CommentInput 
        login={props.login}
        comments={props.comments}
        setComments={props.comments} />

      
		</div>
	);
};

export default CommentSection;
