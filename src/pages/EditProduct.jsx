function EditProduct() {
  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Edit Product</h1>
        <p>Update product information</p>

        <form>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" defaultValue="Laptop" />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea defaultValue="High performance laptop">
            </textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                defaultValue="50000"
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select defaultValue="Electronics">
                 <option>Books</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Footwear</option>
               
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
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;