"use client";
import React from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Import XMarkIcon

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-[#121212] p-6 rounded-lg w-4/5 md:w-1/3 relative">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <ul className="flex flex-col items-center space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-white text-xl"
                onClick={closeMenu} // Close menu on link click
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
