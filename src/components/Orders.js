import React, { useEffect, useState } from "react";
import "../styles/Orders.css";

import { db } from "../config/firebase";
import {
  onSnapshot,
  orderBy,
  query,
  doc,
  collection,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import Order from "./Order";

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      onSnapshot(
        query(
          collection(doc(collection(db, "user"), user?.uid), "orders"),
          orderBy("created", "desc")
        ),
        (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      );
    } else {
      setOrders([])
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map(order => <Order order={order} key={order.id} />)}
      </div>
    </div>
  );
}

export default Orders;
