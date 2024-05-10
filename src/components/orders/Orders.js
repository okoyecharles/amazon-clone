import React, { useEffect } from "react";
import "../../styles/Orders.css";
import { useSelector } from "react-redux";
import Order from "./Order";
import getStorageKey from "../../data/storageKey";

function Orders() {
  const { profile, orders } = useSelector((state) => state.user);

    // Update orders in local storage
    useEffect(() => {
      if (profile && orders?.length > 0) {
        const LOCAL_STORAGE_KEY = getStorageKey(profile.uid);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ orders }));
      }
    }, [orders]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {!profile && "Sign In to see your orders"}
        {profile && !orders.length && "Currently no orders"}
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
