function Categories() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Categories</h1>
          <p>Manage your product categories</p>
        </div>
      </div>

      <div className="category-layout">

        <div className="category-form">
          <h2>Add Category</h2>

          <input
            type="text"
            placeholder="Category name"
          />

          <textarea
            placeholder="Category description"
          ></textarea>

          <button className="primary-btn full-btn">
            Add Category
          </button>
        </div>

        <div className="table-card">
          <h2>Category List</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Electronics</td>
                <td>Electronic products</td>

                <td className="actions">
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Clothing</td>
                <td>Fashion products</td>

                <td className="actions">
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Categories;