import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdLogout } from "react-icons/md";
import { NavLinkIcon } from "@/components/helpers/navbar helpers/nav-link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { useAuthStore } from "@/lib/authStore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DashNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useI18n();
  const { setIsAuthOpen } = useAuthStore();

  const navigation = [
    {
      name: t("dashboard.allprod"),
      href: "/dashboard",
    },
    { name: t("dashboard.orders"), href: "/dashboard/customer-orders" },
    { name: "|", href: "#" },
    { name: t("dashboard.addProd"), href: "/dashboard/add-products" },
    { name: t("dashboard.addcaro"), href: "/dashboard/add-carousel" },
    { name: t("dashboard.addbrand"), href: "/dashboard/add-brands" },
    { name: t("dashboard.addadver"), href: "/dashboard/add-advertisment" },
  ];

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#06b6d4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-4">

                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsAuthOpen(true)}
                  className="mt-2"
                >
                  <NavLinkIcon
                    icon={
                      <div>
                        <MdLogout size={30} color="white" />
                      </div>
                    }
                    tooltipTx={t("auth.logout")}
                  ></NavLinkIcon>
                </div>

                <p className="text-white text-2xl font-semibold">Dashboard</p>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    {navigation.map((item) => {
                      const isActive = pathname === `/${locale}${item.href}`;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={classNames(
                            isActive
                              ? "bg-white text-[#06b6d4]"
                              : "text-white hover:bg-white hover:text-[#06b6d4] font-bold",
                            "rounded-md px-3 py-2 xl:text-md lg:text-sm text-xs font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="mx-2 p-2 sm:hidden text-white hover:text-gray-300"
                >
                  <Bars3Icon className="h-8 w-8" />
                </button>
                <DashDrawer open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    </>
  );
}

const DashDrawer = ({ open, setOpen }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const selectedPath = "/" + pathSegments.slice(0, 3).join("/");
  const t = useI18n();

  const navigation = [
    {
      name: t("dashboard.allprod"),
      href: "/dashboard",
    },
    { name: t("dashboard.orders"), href: "/dashboard/customer-orders" },
    { name: t("dashboard.addProd"), href: "/dashboard/add-products" },
    { name: t("dashboard.addcaro"), href: "/dashboard/add-carousel" },
    { name: t("dashboard.addbrand"), href: "/dashboard/add-brands" },
    { name: t("dashboard.addadver"), href: "/dashboard/add-advertisment" },
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
                        <p className="text-3xl tracking-tight font-bold text-[#06b6d4]">
                          {t("dashboard.title")}
                        </p>
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
                            "block  px-3 py-3 text-2xl"
                          )}
                        >
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
