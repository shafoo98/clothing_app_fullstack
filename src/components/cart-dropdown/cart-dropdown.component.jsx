import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ history }) => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
