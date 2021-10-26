import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/PageNotFound";
import Menu from "./components/Menu";
import Login from "./components/Login";
import axios from "axios";
import Admin from "./components/Admin";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleIncrement = (product) => {
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...newProducts[index] };
    newProducts[index].count++;
    setProducts(newProducts);
  };

  const handleDecrement = (product) => {
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...newProducts[index] };
    newProducts[index].count--;
    setProducts(newProducts);
  };

  const handleDelete = async (id) => {
    const product = products.find((product) => product.id === id);
    await axios.delete(`http://localhost:3000/products/${product.id}`);
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleReset = () => {
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newProducts);
  };

  const handleIsAdd = (product) => {
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index] = { ...newProducts[index] };
    newProducts[index].isAdded = !newProducts[index].isAdded;
    setProducts(newProducts);
  };

  return (
    <>
      <Navbar count={products.filter((product) => product.isAdded).length} />
      <main className="container">
        <Switch>
          <Route
            path="/admin"
            render={(props) => (
              <Admin products={products} {...props} onDelete={handleDelete} />
            )}
          />
          <Route
            path="/menu"
            render={(props) => (
              <Menu products={products} {...props} onAdd={handleIsAdd} />
            )}
          />
          <Route
            path="/productform/:id"
            render={(props) => <ProductForm products={products} {...props} />}
          />
          <Route
            path="/product/:id"
            render={(props) => (
              <ProductDetails products={products} {...props} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/cart"
            render={(props) => (
              <ShoppingCart
                products={products.filter((product) => product.isAdded)}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onReset={handleReset}
                {...props}
              />
            )}
          />
          <Route path="not-found" exact component={PageNotFound} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
