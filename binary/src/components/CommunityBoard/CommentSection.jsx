// CommentSection.js
import React, { useState } from "react";
import "./CommentSection.css";

const CommentSection = ({ comments, addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="formInput"
        />
        <div className="comments">
          {comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
        <button type="submit" className="comment-button">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
