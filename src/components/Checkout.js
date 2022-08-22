import React from "react";
import "../styles/Checkout.css";
import Ad from "../images/Developer-Ad.png";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <a
          href="http://www.linkedin.com/in/charles-k-okoye/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Ad}
            alt="Are you looking for a Developer"
            className="checkout__ad"
          />
        </a>

        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          <button>Deselect all items</button>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
