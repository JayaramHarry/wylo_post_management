
import { v4 as uuidv4 } from 'uuid';
// Define action types
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
// Action creator for adding a post
export const addPost = (post) => ({
  type: ADD_POST,
  payload: { ...post, id: uuidv4() },
});
// Action creator for editing a post
export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});
// Action creator for deleting a post
export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});
