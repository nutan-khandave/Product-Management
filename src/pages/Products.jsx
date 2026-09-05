import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your products easily</p>
        </div>

        <Link to="/add-product">
          <button className="primary-btn">
            + Add Product
          </button>
        </Link>
      </div>

      {/* SEARCH AND CATEGORY FILTER */}
      <div className="filter-box">

        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
        />

        <select className="category-select">
          <option>All Categories</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Footwear</option>
        </select>

      </div>

      {/* PRODUCT TABLE */}
      <div className="table-card">

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th className="actions-heading">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>

              {/* ID */}
              <td>1</td>

              {/* IMAGE */}
              <td>
                <div className="image-placeholder">
                  📦
                </div>
              </td>

              {/* PRODUCT */}
              <td>
                <div className="product-name">
                  <strong>Laptop</strong>
                  <p>High performance laptop</p>
                </div>
              </td>

              {/* CATEGORY */}
              <td>
                <span className="category-badge">
                  Electronics
                </span>
              </td>

              {/* PRICE */}
              <td>₹50,000</td>

              {/* ACTIONS */}
              <td className="actions">

                <Link to="/edit-product">
                  <button className="edit-btn">
                    Edit
                  </button>
                </Link>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Products;