const Menu = ({ products, onAdd }) => {
  return (
    <>
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <i
                  className="fas fa-shopping-cart"
                  style={
                    product.isAdded
                      ? { cursor: "pointer" }
                      : { color: "#999999", cursor: "pointer" }
                  }
                  onClick={() => onAdd(product)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Menu;
