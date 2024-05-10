import React, { useState } from "react";
import "../../styles/Subtotal.css";
import * as utils from "../../logic/utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { profile } = useSelector((state) => state.user);

  const [error, setError] = useState('');

  return (
    <div className="subtotal">
      <div className="subtotal__title">
        Subtotal ({!cart.length ? 'empty' : `${cart.length} ${cart.length === 1 ? 'item' : 'items'}` }):&nbsp;
        <strong>
          {utils.formatter.format(
            cart.reduce(
              (totalPrice, item) => (totalPrice += parseFloat(item.price)),
              0
            )
          )}
        </strong>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" name="gift" />
        <span>This order contains a gift</span>
      </div>
      <button
        onClick={() => {
          if (!cart.length) {
            setError('Cart is empty');
            return;
          }
          profile ? navigate("/payment") : setError('Please sign in first');
        }}
        className="subtotal__button"
      >
        Proceed to checkout
      </button>
      <div className="subtotal__error">
        {error}
      </div>
    </div>
  );
}

export default Subtotal;
