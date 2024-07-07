
import { v4 as uuidv4 } from 'uuid';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: { ...post, id: uuidv4() },
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});
