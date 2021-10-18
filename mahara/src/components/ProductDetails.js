const ProductDetails = (props) => {
  const product = props.products.find(
    (product) => product.id === +props.match.params.id
  );
  return (
    <div>
      <h2>Product Details No.{props.match.params.id}</h2>
      <p>Name : {product.name}</p>
      <p>Count : {product.count}</p>
    </div>
  );
};

export default ProductDetails;
