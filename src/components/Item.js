import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function shoppingCart(){
    setInCart(inCart => !inCart)
  }

  const cartStatus = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={shoppingCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
