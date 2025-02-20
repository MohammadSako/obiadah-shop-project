"use client";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaRegCopyright, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  const t = useI18n();
  return (
    <>
      <div className="mx-auto max-w-7xl sm:p p-4">
        <div
          style={{
            backgroundColor: "#c1c1c1",
            height: 1,
            width: "100%",
          }}
        />
        <footer className="flex sm:flex-row flex-col rtl:font-arabic font-sans text-lg tracking-tight text-gray-600 justify-between my-10 gap-y-10">
          <div className="flex flex-col">
            <div className="flex lg:flex-row flex-col xl:basis-3/5 sm:basis-4/5 lg:gap-8 gap-2">
              <div className="flex flex-row gap-1">
                <div>
                  <p className="text-gray-500">{t("common.obaidahshop")}</p>
                </div>
                <div className="flex mt-1">
                  <FaRegCopyright size={7} color="#6b7280" />
                </div>
              </div>
              <div className="text-gray-500">
                <p>{t("common.form.phone")}</p>
              </div>
              <Link href={"/contact"}>
                <h4 className="hover:text-blue-500 text-gray-500">
                  {t("common.contactus")}
                </h4>
              </Link>
              <Link href={"/about"}>
                <h4 className="hover:text-blue-500 text-gray-500">
                  {t("common.aboutus")}
                </h4>
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-end sm:basis-1/5">
            <FooterLink icon={<FaFacebookF size={25} />} href="#" />
            <FooterLink icon={<FaInstagram size={25} />} href="#" />
            <FooterLink
              icon={<FaWhatsapp size={25} />}
              href="https://wa.me/962777935735"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
export default Footer;

const FooterLink = ({ icon, href }) => {
  return (
    <Link href={href ?? "/"} target="_blank" rel="noopener noreferrer">
      <div className="text-gray-400 hover:text-gray-600">{icon}</div>
    </Link>
  );
};
