import React from "react";
import "../styles/Header.css";
import logo from "../images/amazon-logo.png";
import AmericaFlag from "../images/america-flag.png";
import shoppingCart from "../images/cart.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";

function Header() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  const getUserName = (email) => email.split("@")[0];

  return (
    <div className="header">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="amazon" className="header__logo" />
      </Link>

      {/* Search */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">
          <AiOutlineSearch />
        </div>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">English</span>
          <span className="header__optionTwo header__optionImg">
            <img src={AmericaFlag} alt="English" />
          </span>
        </div>

        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionOne">
              Hello, {user ? getUserName(user.email) : "Guest"}
            </span>
            <span className="header__optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <div>
              <div className="header__optionBasketCount">{cart.length}</div>
              <img
                src={shoppingCart}
                alt="shopping cart"
                className="header__basket"
              />
            </div>
            <span>Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
