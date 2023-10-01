import React, { useEffect, useState } from "react";
import "../styling/Cart.css";

const Cart = (props) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let add = 0;
    props.cart.map((item) => (add += item.amount * item.price));
    setPrice(add);
    // console.log(add);
  };
  useEffect(() => handlePrice());

  return (
    <article>
      {props.cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="photoo" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => props.changeQuantity(item, +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => props.changeQuantity(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => props.handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price </span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
