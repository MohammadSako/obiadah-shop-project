import React from "react";
import { LocaleSwitcher } from "../locale-switcher";

export default function Languages() {
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
