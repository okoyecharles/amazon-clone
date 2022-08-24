import React from "react";
import "../styles/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import * as utils from "../logic/utils";

function Order({ order }) {
  console.log(order.data.cart);
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      {order.data.cart?.map((item, index) => (
        <CheckoutProduct
          id={item.id}
          cartId={index}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
      <p className="order__total">
        Order Total:&nbsp;
        {utils.formatter.format(order.data.amount / 100)}
      </p>
    </div>
  );
}

export default Order;
