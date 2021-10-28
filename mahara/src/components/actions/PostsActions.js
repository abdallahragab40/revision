import axios from "axios";
import TYPES from "../reducers/Types";

export const fetchPosts = () => async (dispatch) => {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    payload: data,
    type: TYPES.FETCH_POSTS,
  });
};

export const addPost = (post) => async (dispatch) => {
  await axios.post("https://jsonplaceholder.typicode.com/posts", post);
  dispatch({
    payload: post,
    type: TYPES.ADD_POST,
  });
};
