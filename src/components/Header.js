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
      <div className="hidden sm:flex w-full justify-between">
        <Logo />
        <ul className="flex gap-x-7 font-medium">{menuItems}</ul>
        <div>
          <FontAwesomeIcon
            icon={faBullseye}
            size="2x"
            className="text-purple"
          />
        </div>
      </div>
      <div className="sm:hidden ml-auto w-fit cursor-pointer">
        <FontAwesomeIcon icon={faBars} size="lg" className="text-purple" />
      </div>
    </header>
  );
};

export default Header;
