import React from "react";
import "../styles/Header.css";
import logo from "../images/amazon-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <img src={logo} alt="amazon" className="header__logo" />

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
          <span className="header__optionTwo header__optionImg">USA</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Hello, Sign In</span>
          <span className="header__optionTwo">User</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          <span className="header__basketCount">0</span>
          <CgShoppingCart className="header__basket" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
