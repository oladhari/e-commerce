import React, { useContext } from "react";
import CardItem from "../components/Cart/CartItem";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const cartItems = useContext(CartContext);
  return (
    <>
      <div>{console.log(cartItems)}</div>
      {cartItems.map((item, idx) => (
        <CardItem product={item} key={idx} />
      ))}
    </>
  );
};

export default Cart;
