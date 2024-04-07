/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import ProjectsMenu from "../menus/ProjectsMenu";
import ThemeToggler from "../buttons/ThemeToggle";

import { useRouter } from "next/router";
import Link from "next/link";
import UserMenu from "../menus/UserMenu";
import { data } from "../../utils/data";
import { Cog6ToothIcon, CogIcon } from "@heroicons/react/24/outline";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full main-border-b">
      <div className="container w-full mx-auto px-4 flex flex-row items-center space-x-4 py-4 ">
        <ProjectsMenu />
        <div className="md:flex hidden flex-row items-center space-x-4 text-sm font-semibold">
          {data.nav_options.map((item, index) => (
            <Link
              href={item.location}
              key={index}
              className={`${
                pathname === item.location
                  ? "text-slate-900 dark:text-white font-bold"
                  : "main-link-text "
              }  hover:font-semibold`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-1" />
        <ThemeToggler />
        <Link
          href={"/settings/developers"}
          className=" transition-all cursor-pointer duration-100 main-link-text dark:hover:bg-slate-800 hover:bg-slate-100 p-1 rounded-full"
        >
          <Cog6ToothIcon height={20} width={20} />
        </Link>

        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
