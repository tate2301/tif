/* eslint-disable @typescript-eslint/ban-types */
import React, { useContext, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { data } from "../../utils/data";
import { Store } from "@/context/Store";
import { useRouter } from "next/router";

type Props = {};

const UserMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext<any>(Store);
  const router = useRouter();

  // const dropdownItems = [{ label: "logout", url: "#" }];

  const logoutUser = () => {
    dispatch({ type: "USER_LOGOUT" });
    router.push("/");
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative">
      <button
        className=" flex flex-row items-center space-x-1 outline-none main-link-text"
        onClick={toggleDropdown}
      >
        <Avatar size={"xs"} name="username" />
        <ChevronDownIcon height={16} width={16} />
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-secondary w-48 mt-2 py-2 rounded-lg shadow-xl main-border">
          {data.nav_options.map((item, index) => (
            <a
              key={index}
              href={item.location}
              className="md:hidden block px-4 py-2 hover:bg-primary text-sm main-text"
            >
              {item.name}
            </a>
          ))}
          <div className="md:border-none main-border-b"></div>
          {/* {dropdownItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block px-4 py-2 hover:bg-primary capitalize text-sm main-text"
            >
              {item.label}
            </a>
          ))} */}
          <button
            onClick={logoutUser}
            className="block px-4 py-2 w-full hover:bg-primary capitalize text-sm main-text"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
