import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/actions';
import './CreatePost.css';

// CreatePost component provides a form to create new posts
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addPost action with the new post data
    dispatch(addPost({ title, content }));
    // Clear the form fields
    setTitle('');
    setContent('');
    // Navigate back to the home page
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="create-post-container">
      
      <form onSubmit={handleSubmit} className="create-post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default CreatePost;
