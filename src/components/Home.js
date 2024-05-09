import React, { useEffect, useState } from "react";
import background from "../images/home-bg.jpg";
import background2 from "../images/home-bg-2.jpg";
import "../styles/Home.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import productsData from "../data/products";

function Home({ mediaWidth }) {
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
          src={mediaWidth > 840 ? background : background2}
          alt="home-background"
          className="home__image"
        />

        {productsData.map((productRow, index) => (
          <div className="home__row" key={index}>
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
      {mediaWidth > 840 && (
        <div
          className={
            alert === "Item added to cart" ? "home__alert active" : "home__alert"
          }
        >
          {alert}
        </div>
      )}
    </div>
  );
}

export default Home;
