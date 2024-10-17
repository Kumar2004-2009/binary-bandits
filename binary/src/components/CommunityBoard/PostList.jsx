// PostList.jsx
import React, { useState } from 'react';
import './PostList.css';

const PostList = ({ posts, addComment, deletePost }) => {
  const [commentInput, setCommentInput] = useState({});

  const handleCommentChange = (index, value) => {
    setCommentInput((prev) => ({ ...prev, [index]: value }));
  };

  const handleCommentSubmit = (e, postIndex) => {
    e.preventDefault();
    if (commentInput[postIndex]?.trim()) {
      addComment(postIndex, commentInput[postIndex]);
      setCommentInput((prev) => ({ ...prev, [postIndex]: '' }));
    }
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={post.id} className="post-item">
          <div className="post-header">
            <h2>{post.title}</h2>
            <button onClick={() => deletePost(post.id)} className="delete-button">
              Delete
            </button>
          </div>
          <p>{post.description}</p>

          <div className="comments">
            <h3>Comments</h3>
            {post.comments.map((comment, i) => (
              <p key={i}>{comment}</p>
            ))}

            <form onSubmit={(e) => handleCommentSubmit(e, index)}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentInput[index] || ''}
                onChange={(e) => handleCommentChange(index, e.target.value)}
              />
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
