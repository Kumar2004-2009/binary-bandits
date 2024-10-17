// MainCommunity.jsx
import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import { openDB } from 'idb';
import './MainCommunity.css'; // Import CSS for layout

const dbPromise = openDB('community-db', 1, {
  upgrade(db) {
    db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
  },
});

const MainCommunity = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from IndexedDB when the component mounts
  useEffect(() => {
    const loadPosts = async () => {
      const db = await dbPromise;
      const allPosts = await db.getAll('posts');
      setPosts(allPosts);
    };
    loadPosts();
  }, []);

  // Add a post to IndexedDB and update the state
  const addPost = async (post) => {
    const db = await dbPromise;
    const id = await db.add('posts', { ...post, comments: [] });
    setPosts((prevPosts) => [...prevPosts, { id, ...post, comments: [] }]);
  };

  // Delete a post from IndexedDB and update the state
  const deletePost = async (postId) => {
    const db = await dbPromise;
    await db.delete('posts', postId); // Delete from IndexedDB
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId)); // Update state
  };

  // Add a comment to a specific post
  const addComment = async (postIndex, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.push(comment);

    const db = await dbPromise;
    await db.put('posts', updatedPosts[postIndex]); // Update the post in IndexedDB
    setPosts(updatedPosts); // Update the state
  };

  return (
    <>
    <h1 className='title'>Community Board</h1>
    <div className="main-container">
      <div className="form-section">
        <h1>Create a Post</h1>
        <PostForm addPost={addPost} />
      </div>

      <div className="posts-section">
        <h1>Posts</h1>
        <PostList posts={posts} addComment={addComment} deletePost={deletePost} />
      </div>
    </div>
    </>
  );
};

export default MainCommunity;
