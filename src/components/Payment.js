import React, { useState } from "react";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import * as utils from "../logic/utils";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import { emptyCart, addOrder } from "../redux/actions";
import { v4 } from "uuid";
import moment from "moment";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cart.length) {
      navigate('/orders', {replace: true});
      return;
    }
    !error && setProcessing(true);

    const order = {
      order_id: v4(),
      amount: utils.formatter.format(utils.getTotalPrice(cart)),
      created: moment().format("MMMM Do YYYY, h:mma"),
      cart,
    };
    dispatch(addOrder(order));

    setTimeout(() => {
      setProcessing("")
      setSucceeded(true)
      setDisabled(true)
      dispatch(emptyCart());
      
      navigate('/orders', {replace: true});
    }, 1000);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{!cart.length ? 'empty' : `${cart.length} ${cart.length === 1 ? 'item' : 'items'}` }</Link>}</h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Charles Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item, index) => (
              <CheckoutProduct
                id={item.id}
                cartId={index}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <div>
                  Order Total :&nbsp;
                  <strong>
                    {utils.formatter.format(utils.getTotalPrice(cart))}
                  </strong>
                </div>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "processing" : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
