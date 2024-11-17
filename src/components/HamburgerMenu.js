"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const HamburgerMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation Variants for the Sidebar
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div className="relative ml-auto w-fit md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`z-20 text-2xl text-purple focus:outline-none ${isOpen ? "hidden" : "visible"}`}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar Menu */}
      <motion.div
        className="fixed right-0 top-0 h-full w-64 bg-white p-4 shadow-lg"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={toggleMenu}
          className={`z-20 text-2xl text-purple focus:outline-none ${isOpen ? "visible" : "hidden"} mb-5`}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="space-y-6 text-center">{items}</ul>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
