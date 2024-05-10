import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import productsData from "../../data/products";

function Home() {
  const cart = useSelector((state) => state.cart);
  const [alert, setAlert] = useState(null);
  const [timeOutID, setTimeOutID] = useState(null);

  useEffect(() => {
    if (cart.length) {
      setAlert("Item added to cart");

      if (timeOutID) clearTimeout(timeOutID);

      const TID = setTimeout(() => {
        setAlert(null);
      }, 1000);
      setTimeOutID(TID);
    }
  }, [cart]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={"/assets/background/home.webp"}
          alt="home-background"
          className="home__image mobile-hidden"
          width="2000"
          height="800"
        />
        <img
          src={"/assets/background/home-mobile.webp"}
          alt="home-background"
          className="home__image desktop-hidden"
          width="840"
          height="336"
        />

        {productsData.map((productRow, index) => (
          <div className={index === 0 ? "home__row first" : "home__row"} key={index}>
            {productRow.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        className={`mobile-hidden ${
          alert === "Item added to cart" ? "home__alert active" : "home__alert"
        }`}
      >
        {alert}
      </div>
    </div>
  );
}

export default Home;
