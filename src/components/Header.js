"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { menu } from "@/data";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = menu.map((e, i) => {
    return (
      <li key={i}>
        <Link href={`/contact`}>{e}</Link>
      </li>
    );
  });
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10 w-full px-9 py-6 ${isScrolled ? "scrolled" : null}`}
    >
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
        <HamburgerMenu items={menuItems} />
      </div>
    </header>
  );
};

export default Header;
