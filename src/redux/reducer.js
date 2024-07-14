import { ADD_POST, EDIT_POST, DELETE_POST } from './actions';

const loadPostsFromLocalStorage = () => {
  try {
    const posts = JSON.parse(localStorage.getItem('posts'));
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    return [];
  }
};
// Initial state with posts from local storage or an empty array
const initialState = {
  posts: loadPostsFromLocalStorage(),
};

const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};
// Reducer function to handle actions and update state
const reducer = (state = initialState, action) => {
  let newPosts;
  switch (action.type) {
    case ADD_POST:
      // Add new post to the state and update local storage
      newPosts = [...state.posts, action.payload];
      savePostsToLocalStorage(newPosts);
      return {
        ...state,
        posts: newPosts,
      };
    case EDIT_POST:
      // Update post in the state and local storage
      newPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      savePostsToLocalStorage(newPosts);
      return {
        ...state,
        posts: newPosts,
      };
    case DELETE_POST:
      // Remove post from the state and local storage
      newPosts = state.posts.filter((post) => post.id !== action.payload);
      savePostsToLocalStorage(newPosts);
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
};

export default reducer;
