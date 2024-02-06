"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div id="links" className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div id="logo" className="justify-center w-1/3 md:hidden lg:flex">
        <Link
          href="/"
          className="flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md"
        >
          <span className="mr-1 text-white">Op</span>
          <span className="flex items-center justify-center w-12 h-8 text-black bg-white rounded">
            Pautu
          </span>
        </Link>
      </div>
      <div className="justify-center hidden w-1/3 gap-4 md:flex">
        <Link href={"#"}>
          <Image src="/x.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      <div id="responsiveMenu" className="md:hidden">
        <button
          id="menuButton"
          onClick={() => setOpen(!open)}
          className="relative z-50 flex flex-col justify-between w-10 h-8"
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div
            id="menuList"
            className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
          >
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
