
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost, deletePost } from '../../redux/actions';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import './PostItem.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    dispatch(editPost({ id: post.id, title: editTitle, content: editContent }));
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const toggleReadMoreModal = () => {
    setIsReadMoreModalOpen(!isReadMoreModalOpen);
  };

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>
        {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
        {post.content.length > 100 && <span className="read-more" onClick={toggleReadMoreModal}>Read more</span>}
      </p>
      <div className="buttons">
        <FaEdit className='button' onClick={handleEdit} />
        <FaTrash className='button' onClick={handleDelete} />
      </div>
      <Modal
        isOpen={isReadMoreModalOpen}
        onRequestClose={toggleReadMoreModal}
        contentLabel="Post Content"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={toggleReadMoreModal}>Close</button>
      </Modal>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Post"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h3>Edit Post</h3>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          required
        />
        <div>
        <button onClick={handleSaveEdit}>Save</button>
        <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default PostItem;
