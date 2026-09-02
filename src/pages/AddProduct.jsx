function AddProduct() {
  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Add Product</h1>
        <p>Create a new product</p>

        <form>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                placeholder="Enter price"
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select>
                <option>Select Category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <input type="file" />
          </div>

          <button
            type="button"
            className="primary-btn full-btn"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;