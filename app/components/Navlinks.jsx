"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ number, pathOne, pathTwo, title }) {
  const currentPage = usePathname();

  return (
    <Link href={pathOne} className="flex gap-4 w-max items-center">
      <div
        className={`${
          currentPage === pathOne || currentPage === pathTwo
            ? "text-marine-blue bg-light-blue"
            : "border-[2px] border-white text-white"
        } w-[45px] h-[45px] font-bold justify-center items-center flex rounded-full`}
      >
        <h2>{number}</h2>
      </div>
      <div className="text-white uppercase hidden md:block">
        <h4 className="font-light text-[13px]">Step {number}</h4>
        <h3 className="font-bold text-[15px]">{title}</h3>
      </div>
    </Link>
  );
}
