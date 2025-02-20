"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { FaRegCopyright } from "react-icons/fa6";
import { Disclosure } from "@headlessui/react";
import { NavMenu } from "../helpers/navbar helpers/navigation-menu";
import Search from "../helpers/navbar helpers/search";
import BrandName from "../helpers/navbar helpers/brand-name";
import Languages from "../helpers/navbar helpers/languages";
import Cart from "../cart/cartDrawer/cart";
import Favorite from "../favorite/favorite";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <FirstNav />
        <SecondNav setOpen={setOpen} />
        <div className="flex-grow border-t border-gray-200" />
      </div>
      {/* <MobileNav /> */}
      <DrawerNav open={open} setOpen={setOpen} />
    </Disclosure>
  );
}

const FirstNav = () => {
  return (
    <div className="relative flex h-16 items-center justify-center sm:justify-between gap-4 mx-4">
      <div>
        <BrandName />
      </div>
      <div className="sm:block grow mx-2">
        <Search />
      </div>
      <Languages />
      <div className="mt-2">
        <Favorite />
      </div>
      <div className="mt-2">
        <Cart />
      </div>
    </div>
  );
};

const SecondNav = ({ setOpen }) => {
  return (
    <div className="relative flex h-16 items-center justify-between">
      <div className=" p-2 absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-2 sm:hidden text-slate-900 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex md:space-x-4 gap-4 items-center justify-between self-center">
            <NavMenu />
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <Link href="/">
            <h1 className="sm:text-xl text-3xl font-sans tracking-wide sm:invisible visible">
              OBAIDAH <span className="font-bold text-[#db2777]">Shop</span>
            </h1>
          </Link>
          {/* <div className="-mt-2 sm:invisible visible">
            <FaRegCopyright size={10} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const DrawerNav = ({ open, setOpen }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const selectedPath = "/" + pathSegments.slice(0, 3).join("/");
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const navigation = [
    {
      name: t("categories.menclothing"),
      href: "/categories/men/clothing",
      current: false,
    },
    {
      name: t("categories.menshoes"),
      href: "/categories/men/shoes",
      current: false,
    },
    {
      name: t("categories.womenclothing"),
      href: "/categories/women/clothing",
      current: false,
    },
    {
      name: t("categories.womenshoes"),
      href: "/categories/women/shoes",
      current: false,
    },
  ];

  const information = [
    { title: t("common.aboutus"), href: "/about" },
    { title: t("common.contactus"), href: "/contact" },
  ];

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 sm:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900">
                    <div className="flex flex-row justify-center   gap-1">
                      <Link href="/">
                        <h1
                          onClick={() => setOpen(false)}
                          className="text-3xl font-sans tracking-tight"
                        >
                          OBAIDAH{" "}
                          <span className="font-bold text-[#06b6d4]">Shop</span>
                        </h1>
                      </Link>
                    </div>
                  </DialogTitle>
                </div>

                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {navigation.map((item) => {
                    const isActive = selectedPath === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <li
                          onClick={() => setOpen(false)}
                          as="a"
                          aria-current={isActive ? "page" : undefined}
                          className={classNames(
                            isActive
                              ? "bg-gray-100 text-gray-900" // Active item styles
                              : "text-gray-900 hover:bg-[#06b6d4] hover:text-white", // Inactive item styles
                            "block rounded-md px-3 py-3 text-2xl font-bold"
                          )}
                        >
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <ul>
                      {information.map((info) => (
                        <Link key={info.title} href={info.href}>
                          <li
                            onClick={() => setOpen(false)}
                            className="text-gray-700 hover:text-[#06b6d4] text-2xl py-1"
                          >
                            {info.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 flex justify-end">
                    <p
                      onClick={() =>
                        changeLocale(locale === "en" ? "ar" : "en")
                      }
                      className="text-gray-700 hover:text-[#06b6d4] text-2xl py-1 font-bold"
                    >
                      {locale === "en" ? "عربي" : "English"}
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
