import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./pages/userspage/Users";
import Product from "./pages/productspage/Product";
import CreateProduct from "./pages/productspage/CreateProduct";
import NewUsers from "./pages/userspage/NewUsers";
import { useState } from "react";
import Home from "./components/Home";
import EditUser from "./pages/userspage/EditUser";

function App() {
  const [userData, setUserData] = useState([]);
  const [userProductData, setUserProductData] = useState([]);

  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route
          path="/user"
          element={<User userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="user/newuser"
          element={<NewUsers userData={userData} setUserData={setUserData} />}
        />
        <Route path="user/edituser" element={<EditUser/>} />
        <Route
          path="/product"
          element={
            <Product
              userProductData={userProductData}
              setUserProductData={setUserProductData}
            />
          }
        />
        <Route
          path="product/newproduct"
          element={
            <CreateProduct
              userProductData={userProductData}
              setUserProductData={setUserProductData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
