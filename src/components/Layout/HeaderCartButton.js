import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./HeaderCartButton.module.css";
const items = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

const HeaderCartButton = (props) => {
  // const { items } = props;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <ShoppingCartIcon sx={{ color: "white" }} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{456}</span>
    </button>
  );
};

export default HeaderCartButton;
