import { Link } from "react-router-dom";

const Product = ({ product, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="row">
      <div className="col-2">
        <span>
          <Link
            style={{ textDecoration: "none", color: "initial" }}
            to={`/product/${product.id}`}
          >
            {product.name}
          </Link>
        </span>
      </div>
      <div className="col">
        <span
          className={
            product.count > 0 ? "badge m-2 bg-primary" : "badge m-2 bg-warning"
          }
        >
          {product.count}
        </span>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => onIncrement(product)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(product)}
          disabled={product.count === 0}
        >
          -
        </button>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(product.id)}
        >
          <i className="fas fa-trash m-2"></i>
        </span>
      </div>
    </div>
  );
};

export default Product;
