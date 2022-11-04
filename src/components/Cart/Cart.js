import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { Fragment } from "react";

const Cart = (props) => {
  const items = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{123}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
