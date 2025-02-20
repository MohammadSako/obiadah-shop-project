"use client";

import { useEffect, useState } from "react";
import classes from "../helpers/HeaderButtonAnimation.module.css";
import { TbHeart } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { NavLinkIcon } from "../helpers/navbar helpers/nav-link";
import { useI18n } from "@/locales/client";

const HeaderFavoriteButton = (props) => {
  const { totalFavQuantity } = useItemStore();
  const t = useI18n();

  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (totalFavQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalFavQuantity]);

  return (
    <div
      className={btnClasses}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      <NavLinkIcon
        icon={<TbHeart className="w-7 h-7 text-forest" />}
        badgeCount={totalFavQuantity}
        text=""
        tooltipTx={t("common.wishlist")}
      ></NavLinkIcon>
    </div>
  );
};
export default HeaderFavoriteButton;
