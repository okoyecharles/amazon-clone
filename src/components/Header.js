import React, { useState } from "react";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { TbMenu2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";

function Header() {
  const cart = useSelector((state) => state.cart);
  const { profile } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [mobileNav, setMobileNav] = useState(false);

  const handleAuthentication = () => {
    setMobileNav((prevState) => !prevState);
    if (window.innerWidth <= 840) !profile && navigate("/login");
    if (profile) auth.signOut();
  };

  const getUserName = (email) => email.split("@")[0];

  return (
    <div className="header">
      <div className="header__container">
        {/* Menu Toggle Open */}

        <button
          aria-label="open menu"
          aria-controls="mobile-nav"
          aria-expanded={mobileNav}
          className="header__toggleOpen desktop-hidden"
        >
          <TbMenu2 onClick={() => setMobileNav((prevState) => !prevState)} />
        </button>

        {/* Logo */}
        <Link to="/" className="header__logo-link">
          <img
            src={"/assets/icons/logo.png"}
            alt="Logo"
            className="header__logo"
            width={100}
            height={38}
          />
        </Link>

        {/* Search */}
        <div className="header__search mobile-hidden">
          <label htmlFor="product-search" className="visually-hidden">
            Search
          </label>
          <input id="product-search" type="text" className="header__searchInput" />
          <button className="header__searchIcon" aria-label="Search products">
            <AiOutlineSearch />
          </button>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <div className="header__option mobile-hidden">
            <span className="header__optionOne">English</span>
            <span className="header__optionTwo header__optionImg">
              <img
                src={"/assets/icons/america-flag.png"}
                alt="English"
                width={25}
                height={16}
              />
            </span>
          </div>

          <Link to={!profile && "/login"} className="mobile-hidden">
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionOne">
                Hello, {profile ? getUserName(profile.email) : "Guest"}
              </span>
              <span className="header__optionTwo">
                {profile ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="mobile-hidden">
            <div className="header__option">
              <span className="header__optionOne">Returns</span>
              <p className="header__optionTwo">& Orders</p>
            </div>
          </Link>

          <button
            className="header__mobileUser desktop-hidden"
            onClick={() => !profile && navigate("/login")}
            aria-label={profile ? "Sign Out" : "Sign In"}
          >
            <MdPersonOutline className="header__mobileUserIcon" />
            <span className="header__mobileUserName">
              {profile ? getUserName(profile.email) : "Guest"}
            </span>
          </button>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <div>
                <div className="header__optionBasketCount">{cart.length}</div>
                <img
                  src={"/assets/icons/cart.png"}
                  alt="shopping cart icon"
                  className="header__basket"
                  width={40}
                  height={40}
                />
              </div>
              <span className="mobile-hidden">Cart</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className="header__mobileContainer desktop-hidden">
        <div className="header__search">
          <label htmlFor="product-search-mobile" className="visually-hidden">
            Search
          </label>
          <input type="text" className="header__searchInput" id="product-search-mobile" />
          <button className="header__searchIcon" aria-label="search products">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div
        className={`desktop-hidden header__mobileNav ${mobileNav ? " active" : ""}`}
        id="mobile-nav"
      >
        <div className={`header__mobileNavContainer ${mobileNav ? " active" : ""}`}>
          <div className="header__mobileNavHeader">
            <div className="header__mobileNavUser">
              <span>{profile ? profile.email : "Guest"}</span>
              <MdPersonOutline />
            </div>
            <div>
              <span>Browse</span>
              <p>Amazon Clone</p>
            </div>
          </div>

          <div className="header__mobileNavItems">
            <button className="header__option header__mobileNavItem">
              <span className="header__optionOne">English</span>
              <span className="header__optionTwo header__optionImg">
                <img
                  src={"/assets/icons/america-flag.png"}
                  alt="English"
                  width={40}
                  height={25}
                />
              </span>
            </button>

            <button
              className="header__option header__mobileNavItem"
              onClick={() => {
                navigate("/orders");
                setMobileNav((prevState) => !prevState);
              }}
            >
              <span className="header__optionOne">Returns</span>
              <span className="header__optionTwo">& Orders</span>
            </button>

            <button
              className="header__option header__mobileNavItem"
              onClick={handleAuthentication}
            >
              <span className="header__optionOne">
                Hello, {profile ? getUserName(profile.email) : "Guest"}
              </span>
              <span className="header__optionTwo">
                {profile ? "Sign Out" : "Sign In"}
              </span>
            </button>
          </div>
        </div>
        <button
          className={mobileNav ? "header__toggleClose active" : "header__toggleClose"}
          onClick={() => setMobileNav((prevState) => !prevState)}
          aria-label="close menu"
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
}

export default Header;
