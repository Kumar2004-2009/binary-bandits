// CommentSection.js
import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = ({ comments, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='rezonanz'
        />
        <button type="submit" style={{backgroundColor: '#5a72a0'}}>Comment</button>
      </form>
      <div className="comments">
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
