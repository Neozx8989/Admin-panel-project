import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import CreateNewUser from "./pages/CreateNewUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="user/newuser" element={<CreateNewUser />} />
        <Route path="/product" element={<Product />} />
        <Route path="product/newproduct" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
