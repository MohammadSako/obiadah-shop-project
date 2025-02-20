"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";

function About() {
  const t = useI18n();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col mt-24 items-center my-8 gap-4 w-full overflow-hidden origin-center"
    >
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-6 sm:px-6 lg:px-14 ">
        <div className="sm:mt-28 mt-10">
          <p className="text-ellipsis sm:text-7xl text-3xl">
            <span className=" text-[#06b6d4] font-bold">
              {t("about.contenttitle")}
            </span>{" "}
            <span className="text-gray-500">{t("about.contenttitle2")}</span>{" "}
          </p>
          <p className="text-ellipsis sm:text-5xl text-2xl font-bold sm:indent-10 mt-4">
            <span className="text-gray-600">{t("about.content")}</span>
          </p>
          {/* <button onClick={emailHandler}>SendEmail</button> */}
        </div>
      </main>
    </motion.section>
  );
}
export default About;
