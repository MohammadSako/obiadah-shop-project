"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/UI/breadcrumb";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function BreadCrumbs() {
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
            const linkName = link[0].toUpperCase() + link.slice(1, link.length); // Capitalize first letter of each link

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <div>{linkName}</div>
                </BreadcrumbItem>
                {index < pathName.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex-grow border-t border-gray-200 mt-6" />
    </div>
  );
}
