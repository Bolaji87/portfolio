import Link from "next/link";
import React from "react";
import { FaToggleOn } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi2";
import IconButton from "./IconButton";

function Header() {
  return (
    <header className="py-4 bg-gray-50 w-full fixed scroll-smooth top-0 z-50 shadow-lg border-b border-b-gray-200 text-stone-700">
      <div className="flex text-lg  items-center max-w-6xl mx-auto justify-between lg:px-0 px-3">
        <h1 className="text-xl font-semibold text-sky-500 hover:text-sky-600">
          Bolaji
        </h1>
        <nav>
          <ul className="sm:flex hidden items-center gap-6">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact-me">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <IconButton>
            <span>Hire me</span>
          </IconButton>

          <div className="text-3xl hidden sm:block font-bold">
            <FaToggleOn />
          </div>
          <div className="text-3xl text-sky-500 hover:text-sky-600 transition ease-in-out font-bold sm:hidden">
            <HiMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
