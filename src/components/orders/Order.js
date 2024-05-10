import React from "react";
import "../../styles/Order.css";
import CheckoutProduct from "../checkout/CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__id">
        <small>{order.order_id}</small>
      </p>
      <p>{order.created}</p>
      {order.cart?.map((item, index) => (
        <CheckoutProduct
          key={item.index}
          id={item.id}
          index={index}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
      <p className="order__total">
        Order Total:&nbsp;
        {order.amount}
      </p>
    </div>
  );
}

export default Order;
