import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice className="price">${price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
