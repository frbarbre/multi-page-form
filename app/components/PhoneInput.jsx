"use client";

import { useStore } from "../store";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export default function PhoneInput() {
  const [phonePressed, setPhonePressed] = useState(false);

  const [phoneErr, setPhoneErr] = useStore(
    (state) => [state.phoneErr, state.setPhoneErr],
    shallow
  );

  const [phoneNumber, setPhoneNumber] = useStore(
    (state) => [state.phoneNumber, state.setPhoneNumber],
    shallow
  );

  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  useEffect(() => {
    if (phonePressed) {
      if (phoneNumber.match(phoneno)) {
        setPhoneErr(false);
      } else {
        setPhoneErr(true);
      }
    }
  }, [phoneNumber]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <label className="text-marine-blue text-[14px]" htmlFor="phone">
          Phone Number
        </label>
        {phoneErr && (
          <p className="text-strawberry-red text-[14px]">
            Requires countrycode and 8 numbers
          </p>
        )}
      </div>
      <input
        type="text"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onKeyDown={() => setPhonePressed(true)}
        placeholder="e.g. +45 8888 8888"
        maxLength={13}
        className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
          phoneErr ? "ring-strawberry-red focus:ring-strawberry-red" : ""
        }`}
      />
    </div>
  );
}
