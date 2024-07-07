import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from '../PostItem/PostItem';
import { FaPlus } from 'react-icons/fa';
import VectorImg from "../../assets/vector_for_no_data_found.png"
import './PostsDisplay.css';

const PostsDisplay = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className="posts-display">
      {posts.length === 0 ? (
        <div className="no-posts">
          <img src={VectorImg} alt="No posts" />
          <p>No posts available</p>
        </div>
      ) : (
        posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))
      )}
      <Link to="/create" className="create-button">
        <FaPlus />
      </Link>
    </div>
  );
};

export default PostsDisplay;
