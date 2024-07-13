import "./Header.css";
import ShopLogo from "../../assets/Shop-Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <NavLink to="/" className="navlink-not-active">
          <div className="logo">
            <img src={ShopLogo} alt="" className="img1" />
            <h1 className="AppName">RightWay</h1>
          </div>
        </NavLink>
        <div className="listing">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/outlet"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>Outlet</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-not-active"
            }
          >
            <li>
              <FaShoppingCart className="icon" />
            </li>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
