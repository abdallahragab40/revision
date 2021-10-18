import Product from "./Product";

const ShoppingCart = ({
  products,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <>
      <h1>Shopping Cart</h1>
      {products.length ? (
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>"No Products!"</p>
      )}
      <button className="btn btn-secondary" onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default ShoppingCart;
