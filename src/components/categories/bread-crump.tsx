"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/UI/breadcrumb";
// import { useRouter } from "next/navigation";
// import { IoMdArrowBack } from "react-icons/io";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function BreadCrumbs() {
  // const router = useRouter();
  const path = usePathname();
  const pathName = path.split("/").filter((path) => path);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <Breadcrumb className="m-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {pathName.map((link, index) => {
            // const href = `/${pathName.slice(0, index + 1).join("/")}`; // Correct href generation
            const linkName = link[0].toUpperCase() + link.slice(1, link.length); // Capitalize first letter of each link

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {/* <Link href={href}>{linkName}</Link> */}
                  <div>{linkName}</div>
                </BreadcrumbItem>
                {index < pathName.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      {/* <div
        className="flex flex-row items-center space-x-1 ml-4 cursor-pointer hover:border-blue-400 w-20 border-2 border-gray-400 px-3 py-1 rounded-md"
        onClick={() => router.back()}
      >
        <IoMdArrowBack size={16} color="#6b7280" />
        <h3 className="text-sm text-gray-500 ">back</h3>
      </div> */}
      <div className="flex-grow border-t border-gray-200 mt-6" />
    </div>
  );
}
