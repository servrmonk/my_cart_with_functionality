import React, { useState } from "react";
import "./styling/App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import './styling/App.css'

export default function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const [amt, changeAmt] = useState(1);

  const changeQuantity = (item, d) => {
    // console.log("item", item);
    // console.log("d", d);
    if (d === 1 && item.amount >= 1) {
      item.amount = item.amount + 1;
      changeAmt(item.amount);

      console.log(amt);
    } else if (d === -1 && item.amount > 1) {
      item.amount = item.amount - 1;
      changeAmt(item.amount);

      console.log(amt);
    }
    if (d === -1 && item.amount === 1) {
      handleRemove(item.id);
    }
  };

  const handleClick = (item) => {
    // console.log(item);
    let isPresent = false;
    cart.forEach((products) => {
      if (item.id === products.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    }
    setCart([...cart, item]);
  };
  const handleRemove = (id) => {
    // console.log("id", id);
    const arr = cart.filter(
      (item) =>
        // console.log(item)
        item.id !== id
    );
    setCart(arr);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          changeQuantity={changeQuantity}
        />
      ) : (
        <Amazon handleClick={handleClick} />
      )}

      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </React.Fragment>
  );
}
