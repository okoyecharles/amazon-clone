import React from "react";
import "../../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { emptyCart } from "../../redux/features/cart/cartSlice";
import socials from "../../data/socials";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/assets/background/cart-ad.png"} alt="Developer Ad" className="checkout__ad" width={1035} height={128} />
        </a>

        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <button onClick={handleEmptyCart}>Deselect all items</button>
        </div>

        <div className="checkout__products">
          {cart?.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              key={index}
              index={index}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
