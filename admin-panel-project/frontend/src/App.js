import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./pages/userspage/Users";
import Product from "./pages/productspage/Product";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateProduct from "./pages/productspage/CreateProduct";
import NewUsers from "./pages/userspage/NewUsers";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [userProductData, setUserProductData] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/user"
          element={<User userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="user/newuser"
          element={<NewUsers userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/product"
          element={
            <Product
              userData={userProductData}
              setUserData={setUserProductData}
            />
          }
        />
        <Route
          path="product/newproduct"
          element={
            <CreateProduct
              userData={userProductData}
              setUserData={setUserProductData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
