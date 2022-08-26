import React, { useEffect, useState } from "react";
import background from "../images/home-bg.jpg";
import background2 from "../images/home-bg-2.jpg";
import "../styles/Home.css";
import Product from "./Product";

// Images
import iphone from "../images/product-iphone13.png";
import samsungs21 from "../images/product-samsungs21.png";
import amazonecho from "../images/product-amazonecho.png";
import ipadpro from "../images/product-ipadpro.png";
import applewatch from "../images/product-applewatch.png";
import samsungtv from "../images/product-samsungtv.png";
import { useSelector } from "react-redux";

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
        <img src={mediaWidth > 840 ? background : background2} alt="home-background" className="home__image" />

        <div className="home__row">
          <Product
            key="537338"
            id="537338"
            image={iphone}
            title="Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)"
            price="814.99"
            rating={4.5}
          />
          <Product
            key="537339"
            id="537339"
            image={samsungs21}
            title="Samsung Galaxy S21 5G, 128GB, Phantom Gray"
            price="599.99"
            rating={4.5}
          />
        </div>

        <div className="home__row">
          <Product
            key="537340"
            id="537340"
            image={amazonecho}
            title="Echo (4th generation) With Alexa"
            price="1299.99"
            rating={5}
          />
          <Product
            key="537341"
            id="537341"
            image={ipadpro}
            title="2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver"
            price="599.99"
            rating={5}
          />
          <Product
            key="537342"
            id="537342"
            image={applewatch}
            title="Apple Watch Series 3 - Silver Aluminum Case"
            price="139.00"
            rating={4.5}
          />
        </div>

        <div className="home__row">
          <Product
            key="537343"
            id="537343"
            image={samsungtv}
            title="SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor"
            price="199.99"
            rating={3.5}
          />
        </div>
      </div>
      {mediaWidth > 840 && (
        <div
          className={
            alert === "Item added to cart"
              ? "home__alert active"
              : "home__alert"
          }
        >
          {alert}
        </div>
      )}
    </div>
  );
}

export default Home;
