import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../config/firebase";
import { setUser } from "../redux/actions";
import Payment from "./Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LKikxJIr5sMtV8TVVCP3FSBVbFYb87a2Al30jAkasBgTDe61U02aRDd5ZJKT68wknB9Woa8ZNReOfSBs1Q3Ip6g00TdXWcbbN"
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user logged in / was logged in
        dispatch(setUser(authUser));
      } else {
        // The user logged out
        dispatch(setUser(null));
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
