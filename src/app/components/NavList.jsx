import React from "react";
import Link from "next/link";

const NavList = ({ href, title }) => {
  
    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(href);

      if (targetElement) {
        window.history.pushState({}, '', href);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };


  return (
    <Link
      href={href}
      passHref
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
        {title}
    </Link>
  );
};

export default NavList;
