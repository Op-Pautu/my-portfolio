import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded px-2 py-1 transition hover:bg-black/5 ${
        pathname === link.url &&
        "bg-black hover:bg-black/90 text-white transition"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
