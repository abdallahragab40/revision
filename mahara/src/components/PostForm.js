import { useState } from "react";
import { addPost } from "./actions/PostsActions";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    dispatch(addPost(post));
  };

  return (
    <>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            name="body"
            value={body}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default PostForm;
