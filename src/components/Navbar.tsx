import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween padding-container max-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>
      <ul className="hidden gap-12 h-full lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
