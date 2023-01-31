import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import User from "./pages/Users";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <Sidebar/>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
