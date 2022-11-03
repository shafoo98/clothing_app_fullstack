import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducers/reducers.utils";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const exisitingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found quantity++ and return new array
  if (exisitingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const exisitingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exisitingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
