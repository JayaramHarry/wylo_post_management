import { ADD_POST, EDIT_POST, DELETE_POST } from './actions';

const loadPostsFromLocalStorage = () => {
  try {
    const posts = JSON.parse(localStorage.getItem('posts'));
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  posts: loadPostsFromLocalStorage(),
};

const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const reducer = (state = initialState, action) => {
  let newPosts;
  switch (action.type) {
    case ADD_POST:
      newPosts = [...state.posts, action.payload];
      savePostsToLocalStorage(newPosts);
      return {
        ...state,
        posts: newPosts,
      };
    case EDIT_POST:
      newPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      savePostsToLocalStorage(newPosts);
      return {
        ...state,
        posts: newPosts,
      };
    case DELETE_POST:
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
