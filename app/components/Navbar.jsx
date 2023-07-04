"use client";

import { navLinks } from "../constants";
import { NavLinks } from ".";
import { nanoid } from "nanoid";

export default function Navbar() {
  return (
    <div className="bg-pattern-mobile md:bg-pattern-desktop h-[200px] bg-no-repeat bg-cover md:bg-bottom p-8 flex md:flex-col gap-4 md:rounded-lg justify-center md:justify-start items-start md:h-full md:w-[250px]">
      {navLinks.map((link) => (
        <NavLinks {...link} key={nanoid()} />
      ))}
    </div>
  );
}
