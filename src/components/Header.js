import React, { useState } from "react";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { TbMenu2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";

function Header({ mediaWidth }) {
  const cart = useSelector((state) => state.cart);
  const { profile } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [mobileNav, setMobileNav] = useState(false);

  const handleAuthentication = () => {
    setMobileNav((prevState) => !prevState);
    if (mediaWidth <= 840) !profile && navigate("/login");
    if (profile) auth.signOut();
  };

  const getUserName = (email) => email.split("@")[0];

  return (
    <div className="header">
      <div className="header__container">
        {/* Menu Toggle Open */}
        {mediaWidth <= 840 && (
          <TbMenu2
            className="header__toggleOpen"
            onClick={() => setMobileNav((prevState) => !prevState)}
          />
        )}

        {/* Logo */}
        <Link to="/" className="header__logo-link">
          <img src={'/assets/icons/logo.png'} alt="amazon" className="header__logo" width={99} height={40} />
        </Link>

        {/* Search */}
        <div className="header__search mobile-hidden">
          <input type="text" className="header__searchInput" />
          <div className="header__searchIcon">
            <AiOutlineSearch />
          </div>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          {mediaWidth > 840 && (
            <div className="header__option">
              <span className="header__optionOne">English</span>
              <span className="header__optionTwo header__optionImg">
                <img src={'/assets/icons/america-flag.png'} alt="English" width={25} height={16} />
              </span>
            </div>
          )}

          {mediaWidth > 840 && (
            <Link to={!profile && "/login"}>
              <div className="header__option" onClick={handleAuthentication}>
                <span className="header__optionOne">
                  Hello, {profile ? getUserName(profile.email) : "Guest"}
                </span>
                <span className="header__optionTwo">
                  {profile ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          )}

          {mediaWidth > 840 && (
            <Link to="/orders">
              <div className="header__option">
                <span className="header__optionOne">Returns</span>
                <span className="header__optionTwo">& Orders</span>
              </div>
            </Link>
          )}

          {mediaWidth <= 840 && (
            <div className="header__mobileUser" onClick={() => !profile && navigate('/login')}>
              <MdPersonOutline className="header__mobileUserIcon" />
              <span className="header__mobileUserName">
                {profile ? getUserName(profile.email) : "Guest"}
              </span>
            </div>
          )}

          <Link to="/checkout">
            <div className="header__optionBasket">
              <div>
                <div className="header__optionBasketCount">{cart.length}</div>
                <img
                  src={"/assets/icons/cart.png"}
                  alt="shopping cart"
                  className="header__basket"
                  width={40}
                  height={40}
                />
              </div>
              {mediaWidth > 840 && <span>Cart</span>}
            </div>
          </Link>
        </nav>
      </div>
      <div className="header__mobileContainer">
        {mediaWidth <= 840 && (
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <div className="header__searchIcon">
              <AiOutlineSearch />
            </div>
          </div>
        )}
      </div>
      {mediaWidth <= 840 && (
        <div
          className={
            mobileNav ? "header__mobileNav active" : "header__mobileNav"
          }
        >
          <div
            className={
              mobileNav
                ? "header__mobileNavContainer active"
                : "header__mobileNavContainer"
            }
          >
            <div className="header__mobileNavHeader">
              <div className="header__mobileNavUser">
                <span>{profile ? profile.email : "Guest"}</span>
                <MdPersonOutline />
              </div>
              <p>
                <span>Browse</span>
                <br />
                Amazon Clone
              </p>
            </div>

            <ul className="header__mobileNavItems">
              <li className="header__option header__mobileNavItem">
                <span className="header__optionOne">English</span>
                <span className="header__optionTwo header__optionImg">
                  <img src={'/assets/icons/america-flag.png'} alt="English" width={40} height={25} />
                </span>
              </li>

              <li
                className="header__option header__mobileNavItem"
                onClick={() => {
                  navigate("/orders");
                  setMobileNav((prevState) => !prevState);
                }}
              >
                <span className="header__optionOne">Returns</span>
                <span className="header__optionTwo">& Orders</span>
              </li>

              <li
                className="header__option header__mobileNavItem"
                onClick={handleAuthentication}
              >
                <span className="header__optionOne">
                  Hello, {profile ? getUserName(profile.email) : "Guest"}
                </span>
                <span className="header__optionTwo">
                  {profile ? "Sign Out" : "Sign In"}
                </span>
              </li>
            </ul>
          </div>
          <div
            className={
              mobileNav ? "header__toggleClose active" : "header__toggleClose"
            }
            onClick={() => setMobileNav((prevState) => !prevState)}
          >
            <CgClose />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
