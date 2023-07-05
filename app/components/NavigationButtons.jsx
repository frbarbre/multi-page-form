"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../store";

export default function NavigationButtons() {
  const router = useRouter();

  const currentPage = usePathname();

  const [nextPath, setNextPath] = useState("");
  const [prevPath, setPrevPath] = useState("");

  const name = useStore((store) => store.name);
  const setNameErr = useStore((store) => store.setNameErr);

  const email = useStore((store) => store.email);
  const setEmailErr = useStore((store) => store.setEmailErr);

  const phone = useStore((store) => store.phoneNumber);
  const setPhoneErr = useStore((store) => store.setPhoneErr);

  useEffect(() => {
    if (currentPage === "/") {
      setNextPath("/plan");
      setPrevPath("");
    } else if (currentPage === "/plan") {
      setNextPath("/addOns");
      setPrevPath("/");
    } else if (currentPage === "/addOns") {
      setNextPath("/summary");
      setPrevPath("/plan");
    } else if (currentPage === "/summary") {
      setNextPath("/submitted");
      setPrevPath("addOns");
    }
  }, [currentPage]);

  function handleNextClick() {
    if (currentPage === "/") {
      let check = 0;
      if (name !== "") {
        setNameErr(false);
        check += 1;
      } else {
        console.log("name cant't be empty");
        setNameErr(true);
      }

      if (email.includes("@") && email.includes(".") && !email.includes(" ")) {
        setEmailErr(false);
        check += 1;
      } else {
        console.log("email is invalid");
        setEmailErr(true);
      }

      if (phone !== "") {
        setPhoneErr(false);
        check += 1;
      } else {
        console.log("phone number can't be empty");
        setPhoneErr(true);
      }

      if (check === 3) {
        router.push(nextPath);
      }
    }
    else {
        router.push(nextPath)
    }
  }

  function handlePrevClick() {
    router.push(prevPath);
  }

  return (
    <div className="md:p-8 md:pt-0">
      <div
        className={`flex justify-between w-full md:max-w-[452px] mx-auto ${
          currentPage === "/" ? "flex-col" : ""
        }`}
      >
        {currentPage !== "/" && currentPage !== "/submitted" && (
          <button onClick={handlePrevClick}>Go back</button>
        )}
        {currentPage !== "/submitted" && (
          <button
            className={`self-end text-white rounded-lg py-3 px-5 ${
              currentPage === "/summary" ? "bg-purplish-blue" : "bg-marine-blue"
            }`}
            type="button"
            onClick={handleNextClick}
          >
            {currentPage === "/summary" ? "Confirm" : "Next Page"}
          </button>
        )}
      </div>
    </div>
  );
}
