import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { useSelector } from "react-redux";
import Order from "./Order";

function Orders() {
  const user = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.userInfo);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      setOrders(userInfo.orders)
    } else {
      setOrders([])
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {!orders && 'Currently no orders'}
        {orders?.map(order => <Order order={order} key={order.id} />)}
      </div>
    </div>
  );
}

export default Orders;
