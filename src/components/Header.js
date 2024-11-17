import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBullseye } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { menu } from "@/data";

const Header = () => {
  const menuItems = menu.map((e, i) => {
    return (
      <li key={i}>
        <Link href={`/contact`}>{e}</Link>
      </li>
    );
  });

  return (
    <header className="text-black">
      <div className="flex w-full items-center justify-between gap-5">
        <Logo />
        <ul className="hidden items-center font-medium sm:gap-4 sm:text-sm md:flex lg:gap-x-7 lg:text-base">
          {menuItems}
        </ul>
        <div className="hidden md:block">
          <FontAwesomeIcon
            icon={faBullseye}
            size="2x"
            className="text-purple"
          />
        </div>
        <div className="ml-auto w-fit cursor-pointer md:hidden">
          <FontAwesomeIcon icon={faBars} size="lg" className="text-purple" />
        </div>
      </div>
    </header>
  );
};

export default Header;
