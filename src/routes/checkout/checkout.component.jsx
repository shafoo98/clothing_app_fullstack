import React, { useContext } from "react";

import "./checkout.styles.scss";

import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>No cart items added</h1>
      ) : (
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              {" "}
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => {
            return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
          })}
          <span className="total">${cartTotal}</span>
        </div>
      )}
    </div>
  );
};

export default Checkout;
