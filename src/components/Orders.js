import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { deleteUserOrders, setUser, updateUserOrders } from "../redux/actions";

function Orders() {
  const user = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.userInfo);
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const extStoreOrders =
    JSON.parse(localStorage.getItem(`charles_amazon_clone_user_${user?.uid}`))
      ?.orders || [];

  // Set state whenever redux store changes
  useEffect(() => {
    if (user) {
      if (extStoreOrders.length < userInfo.orders?.length) {
        localStorage.setItem(
          `charles_amazon_clone_user_${user.uid}`,
          JSON.stringify(userInfo)
        );
        const localStore = JSON.parse(
          localStorage.getItem(`charles_amazon_clone_user_${user.uid}`)
        );
        setOrders(localStore);
      }
    }
  }, [userInfo]);

  // Update state
  useEffect(() => {
    if (user) {
      dispatch(updateUserOrders(extStoreOrders));
      setOrders(extStoreOrders);
    } else {
      setOrders([]);
      dispatch(deleteUserOrders());
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {!user && "Sign In to see your orders"}
        {user && !extStoreOrders.length && "Currently no orders"}
        {extStoreOrders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
