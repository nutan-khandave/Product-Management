import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product" element={<EditProduct />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;