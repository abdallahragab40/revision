import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors) return;

    console.log(username, password);
  };

  const handleChange = (e, name) => {
    name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  const validate = () => {
    const error = {};

    if (username.trim() === "") {
      error.username = "Username is required";
    }

    if (password.trim() === "") {
      error.password = "Password is required";
    }

    setErrors(error);
    return Object.keys(error).length === 0 ? null : error;
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => handleChange(e, "username")}
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e, "password")}
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
