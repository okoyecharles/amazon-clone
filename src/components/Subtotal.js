import React from "react";
import "../styles/Subtotal.css";
import * as utils from "../logic/utils";

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__title">
        Subtotal ({0} items):&nbsp;
        <strong>{utils.formatter.format(1222)}</strong>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" name="gift" />
        <span>This order contains a gift</span>
      </div>
      <button className="subtotal__button" type="button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
