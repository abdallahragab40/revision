import { useEffect } from "react";
import { fetchPosts } from "./actions/PostsActions";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts);
  const posts = postsList.items;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post, i) => (
        <div key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
