"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/UI/menubar";
import { Spacer } from "@nextui-org/react";
import Link from "next/link";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { useCurrentLocale, useI18n } from "@/locales/client";
import Image from "next/image";

export function NavMenu() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const selectedPath = "/" + pathSegments.slice(0, 3).join("/");
  const t = useI18n();
  const locale = useCurrentLocale();

  const All = [
    {
      id: 1,
      title: t("categories.menclothing"),
      image: "/c3.avif",
      url: "/categories/men/clothing",
      SubCategory: [
        {
          id: 1,
          title: t("categories.top"),
          image: "/c3.avif",
          url: "/categories/men/clothing/top",
          category_id: 1,
          items: [
            {
              id: 1,
              title: t("categories.tshirts"),
              image: "/c3.avif",
              url: "/categories/men/clothing/top/mtshirt",
              itemid: "mtshirt",
              sub_category_id: 1,
            },
            {
              id: 3,
              title: t("categories.shirts"),
              image: "/shirt.avif",
              url: "/categories/men/clothing/top/mshirt",
              itemid: "mshirt",
              sub_category_id: 1,
            },
            {
              id: 5,
              title: t("categories.woolblouses"),
              image: "/mwool.avif",
              url: "/categories/men/clothing/top/mblouse",
              itemid: "mblouse",
              sub_category_id: 1,
            },
            {
              id: 7,
              title: t("categories.hats"),
              image: "/hat m.avif",
              url: "/categories/men/clothing/top/mhats",
              itemid: "mhats",
              sub_category_id: 1,
            },
            {
              id: 9,
              title: t("categories.watches"),
              image: "/m watch.avif",
              url: "/categories/men/clothing/top/mwatches",
              itemid: "mwatches",
              sub_category_id: 1,
            },
            {
              id: 11,
              title: t("categories.hats"),
              image: "/m bag.avif",
              url: "/categories/men/clothing/top/mbag",
              itemid: "mbag",
              sub_category_id: 1,
            },
          ],
        },
        {
          id: 2,
          title: t("categories.lower"),
          image: "/jeans.avif",
          url: "/categories/men/clothing/lower",
          category_id: 1,
          items: [
            {
              id: 13,
              title: t("categories.jeans"),
              image: "/jeans.avif",
              url: "/categories/men/clothing/lower/mjeans",
              itemid: "mjeans",
              sub_category_id: 2,
            },
            {
              id: 15,
              title: t("categories.pants"),
              image: "/m pants.avif",
              url: "/categories/men/clothing/lower/mpants",
              itemid: "mpants",
              sub_category_id: 2,
            },
            {
              id: 17,
              title: t("categories.socks"),
              image: "/m soks.avif",
              url: "/categories/men/clothing/lower/msocks",
              itemid: "msocks",
              sub_category_id: 2,
            },
            {
              id: 19,
              title: t("categories.belts"),
              image: "/m belt.avif",
              url: "/categories/men/clothing/lower/mbelts",
              itemid: "mbelts",
              sub_category_id: 2,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: t("categories.womenclothing"),
      image: "/c2.avif",
      url: "/categories/women/clothing",
      SubCategory: [
        {
          id: 3,
          title: t("categories.top"),
          image: "/c2.avif",
          url: "/categories/women/clothing/top",
          category_id: 2,
          items: [
            {
              id: 2,
              title: t("categories.tshirts"),
              image: "/c2.avif",
              url: "/categories/women/clothing/top/wtshirt",
              itemid: "wtshirt",
              sub_category_id: 3,
            },
            {
              id: 4,
              title: t("categories.shirts"),
              image: "/wshirt.avif",
              url: "/categories/women/clothing/top/wshirt",
              itemid: "wshirt",
              sub_category_id: 3,
            },
            {
              id: 6,
              title: t("categories.woolblouses"),
              image: "/wool.avif",
              url: "/categories/women/clothing/top/wblouse",
              itemid: "wblouse",
              sub_category_id: 3,
            },
            {
              id: 8,
              title: t("categories.hats"),
              image: "/hat w.avif",
              url: "/categories/women/clothing/top/whats",
              itemid: "whats",
              sub_category_id: 3,
            },
            {
              id: 10,
              title: t("categories.watches"),
              image: "/w watch.avif",
              url: "/categories/women/clothing/top/wwatches",
              itemid: "wwatches",
              sub_category_id: 3,
            },
            {
              id: 12,
              title: t("categories.bags"),
              image: "/w bag.avif",
              url: "/categories/women/clothing/top/wbag",
              itemid: "wbag",
              sub_category_id: 3,
            },
          ],
        },
        {
          id: 4,
          title: t("categories.lower"),
          image: "/women jeans.avif",
          url: "/categories/women/clothing/lower",
          category_id: 2,
          items: [
            {
              id: 14,
              title: t("categories.jeans"),
              image: "/women jeans.avif",
              url: "/categories/women/clothing/lower/wjeans",
              itemid: "wjeans",
              sub_category_id: 4,
            },
            {
              id: 16,
              title: t("categories.pants"),
              image: "/w pants.avif",
              url: "/categories/women/clothing/lower/wpants",
              itemid: "wpants",
              sub_category_id: 4,
            },
            {
              id: 18,
              title: t("categories.socks"),
              image: "/w socks.avif",
              url: "/categories/women/clothing/lower/wsocks",
              itemid: "wsocks",
              sub_category_id: 4,
            },
            {
              id: 20,
              title: t("categories.belts"),
              image: "/w belt.avif",
              url: "/categories/women/clothing/lower/wbelts",
              itemid: "wbelts",
              sub_category_id: 4,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: t("categories.menshoes"),
      image: "/men shoes.avif",
      url: "/categories/men/shoes",
      SubCategory: [
        {
          id: 5,
          title: t("categories.shoes"),
          image: "/men shoes.avif",
          url: "/categories/men/shoes",
          category_id: 3,
          items: [
            {
              id: 21,
              title: t("categories.safty"),
              image: "/work safty.avif",
              url: "/categories/men/shoes/mwork",
              itemid: "mwork",
              sub_category_id: 5,
            },
            {
              id: 22,
              title: t("categories.loafers"),
              image: "/Loafers & Slip-Ons m.avif",
              url: "/categories/men/shoes/mloafers",
              itemid: "mloafers",
              sub_category_id: 5,
            },
            {
              id: 24,
              title: t("categories.snow"),
              image: "/Snow Boots m.avif",
              url: "/categories/men/shoes/msnow",
              itemid: "msnow",
              sub_category_id: 5,
            },
            {
              id: 26,
              title: t("categories.casual"),
              image: "/Casual Shoes.avif",
              url: "/categories/men/shoes/mcasual",
              itemid: "mcasual",
              sub_category_id: 5,
            },
            {
              id: 27,
              title: t("categories.boots"),
              image: "/Boots m.avif",
              url: "/categories/men/shoes/mboots",
              itemid: "mboots",
              sub_category_id: 5,
            },
            {
              id: 28,
              title: t("categories.sandals"),
              image: "/Sandals m.avif",
              url: "/categories/men/shoes/msandals",
              itemid: "msandals",
              sub_category_id: 5,
            },
            {
              id: 29,
              title: t("categories.others"),
              image: "/m belt.avif",
              url: "/categories/men/shoes/mothers",
              itemid: "mothers",
              sub_category_id: 5,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: t("categories.womenshoes"),
      image: "/women shoes.avif",
      url: "/categories/women/shoes",
      SubCategory: [
        {
          id: 6,
          title: t("categories.shoes"),
          image: "/women shoes.avif",
          url: "/categories/women/shoes",
          category_id: 4,
          items: [
            {
              id: 23,
              title: t("categories.loafers"),
              image: "/Loafers & Slip-Ons w.avif",
              url: "/categories/women/shoes/wloafers",
              itemid: "wloafers",
              sub_category_id: 6,
            },
            {
              id: 25,
              title: t("categories.snow"),
              image: "/Snow Boots w.avif",
              url: "/categories/women/shoes/wsnow",
              itemid: "wsnow",
              sub_category_id: 6,
            },
            {
              id: 30,
              title: t("categories.others"),
              image: "/w belt.avif",
              url: "/categories/women/shoes/wothers",
              itemid: "wothers",
              sub_category_id: 6,
            },
            {
              id: 31,
              title: t("categories.flats"),
              image: "/Flats w.avif",
              url: "/categories/women/shoes/wflats",
              itemid: "wflats",
              sub_category_id: 6,
            },
            {
              id: 32,
              title: t("categories.slippers"),
              image: "/Slippers w.avif",
              url: "/categories/women/shoes/wslippers",
              itemid: "wslippers",
              sub_category_id: 6,
            },
            {
              id: 33,
              title: t("categories.sneakers"),
              image: "/sneakers w.avif",
              url: "/categories/women/shoes/wsneakers",
              itemid: "wsneakers",
              sub_category_id: 6,
            },
          ],
        },
      ],
    },
  ];

  return (
    <Menubar className="border-none" dir={locale === "ar" ? "rtl" : "ltr"}>
      {All.map((items) => (
        <MenubarMenu key={items.id}>
          <MenubarTrigger>
            <NavLink
              text={items.title}
              className={
                selectedPath === `${items.url}`
                  ? "text-gray-800 text-xl font-medium capitalize hover:text-gray-800 cursor-pointer"
                  : "text-gray-400 text-xl font-medium capitalize hover:text-gray-800 cursor-pointer"
              }
            >
              {items.title}
            </NavLink>
          </MenubarTrigger>
          <MenubarContent>
            <Link href={items.url}>
              <MenubarItem className="text-lg cursor-pointer">
                {t("categories.goto")}
                <Spacer />
                <span className="font-bold">{items.title}</span>
              </MenubarItem>
            </Link>
            {items.SubCategory.map((item) => (
              <MenubarSub key={item.id}>
                <Link href={item.url}>
                  <MenubarSubTrigger className="text-lg cursor-pointer">
                    <div className="flex gap-4">
                      <Image
                        src={item.image}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                        style={{ borderRadius: 50 }}
                      />
                      <div className="flex items-center">{item.title}</div>
                    </div>
                  </MenubarSubTrigger>
                </Link>
                <MenubarSubContent>
                  {item.items.map((list) => (
                    <Link key={list.id} href={`${list.url}`}>
                      <MenubarItem className="text-lg cursor-pointer">
                        <div className="flex gap-4">
                          <Image
                            src={list.image}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            style={{ borderRadius: 50 }}
                          />
                          <div className="flex items-center">{list.title}</div>
                        </div>
                      </MenubarItem>
                    </Link>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
          <div className="hidden lg:block w-px h-6 bg-gray-200" />
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
