"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div id="links" className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <div id="logo" className="xl:justify-center xl:w-1/3 md:hidden lg:flex">
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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 origin-left bg-white rounded"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 origin-left bg-white rounded"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            id="menuList"
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
