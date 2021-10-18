const Admin = ({ products, onDelete, history }) => {
  return (
    <>
      <h1>Admin Page</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => history.push("/productform/new")}
      >
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
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
                  className="fas fa-edit"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push(`/productform/${product.id}`)}
                ></i>
              </td>
              <td>
                <i
                  className="fas fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => onDelete(product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
