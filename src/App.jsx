import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Outlet from "./pages/Outlet/Outlet";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
