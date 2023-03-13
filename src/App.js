import Footer from "./Footer";
import "./Main.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Bags from "./pages/Bags";
import Sneakers from "./pages/Sneakers";
import Contact from "./pages/Contact";
import Product from "./Products/Product";
import Basket from "./pages/Basket";
import { Favorite } from "./pages/Favorite";
import Belt from "./pages/Belt";
import MyProfile from "./pages/MyProfile";
import Add from "./pages/Add";
import { Route, Routes } from "react-router-dom";
import UserProduct from "./pages/UserProduct";


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/belt" element={<Belt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/like" element={<Favorite />} />
        <Route path="/myprofil" element={<MyProfile />} />
        <Route path="/crud" element={<Add />} />
        <Route path="/user-product" element={<UserProduct />} />
      </Routes>
    </div>
  );
}

export default App;
