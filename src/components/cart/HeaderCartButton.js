"use client";

import { useEffect, useState } from "react";
import classes from "../helpers/HeaderButtonAnimation.module.css";
import { useItemStore } from "../../lib/store";
import { NavLinkIcon } from "../helpers/navbar helpers/nav-link";
import { useI18n } from "@/locales/client";
import { FiShoppingCart } from "react-icons/fi";

const HeaderCartButton = (props) => {
  const quantity = useItemStore((state) => state.totalQuantity);
  const t = useI18n();

  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (quantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [quantity]);

  return (
    <div
      className={btnClasses}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      <NavLinkIcon
        icon={<FiShoppingCart className="w-7 h-7 text-forest" />}
        badgeCount={quantity}
        text=""
        tooltipTx={t("common.cart")}
      ></NavLinkIcon>
    </div>
  );
};
export default HeaderCartButton;
