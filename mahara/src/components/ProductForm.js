import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ history, match }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const id = match.params?.id;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setName(data.name);
      setPrice(data.price);
    };
    id !== "new" && fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, isAdded: false, count: 0 };

    id === "new"
      ? await axios.post("http://localhost:3000/products", product)
      : await axios.put(`http://localhost:3000/products/${id}`, product);

    history.replace("/admin");
  };

  const handleChange = (e, name) => {
    name === "name" ? setName(e.target.value) : setPrice(e.target.value);
  };

  return (
    <>
      <h1>{id === "new" ? "Add" : "Edit"} Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={(e) => handleChange(e, "price")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id === "new" ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
