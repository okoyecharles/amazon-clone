import React, { useEffect, useState } from "react";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import * as utils from "../logic/utils";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${
          cart.reduce(
            (totalPrice, item) => (totalPrice += parseFloat(item.price)),
            0
          ) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate('/orders', { replace: true })
    })
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{cart?.length} items</Link>}</h1>

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
                    {utils.formatter.format(
                      cart.reduce(
                        (totalPrice, item) =>
                          (totalPrice += parseFloat(item.price)),
                        0
                      )
                    )}
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
