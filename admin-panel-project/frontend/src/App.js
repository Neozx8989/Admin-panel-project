import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import User from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box>
      <Sidebar/>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      </Box>
    </div>
  );
}

export default App;
