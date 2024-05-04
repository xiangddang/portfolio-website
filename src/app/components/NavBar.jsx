import React from "react";
import Link from "next/link";
import NavList from "./NavList";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
    ];

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            {
                navLinks.map((link, index) => (
                    <li key={index}>
                        <NavList href={link.path} title={link.title} />
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
