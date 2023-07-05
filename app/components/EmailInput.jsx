"use client";

import { useStore } from "../store";
import { useState, useEffect } from "react";
import { shallow } from "zustand/shallow";

export default function EmailInput() {
  const [mailPressed, setMailPressed] = useState(false);

  const [emailErr, setEmailErr] = useStore(
    (state) => [state.emailErr, state.setEmailErr],
    shallow
  );

  const [email, setEmail] = useStore(
    (state) => [state.email, state.setEmail],
    shallow
  );

  useEffect(() => {
    if (mailPressed) {
      if (email.includes("@") && email.includes(".") && !email.includes(" ")) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
      }
    }
  }, [email]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <label className="text-marine-blue text-[14px]" htmlFor="email">
          Email Address
        </label>
        {emailErr && (
          <p className="text-strawberry-red text-[14px]">Email is invalid</p>
        )}
      </div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={() => setMailPressed(true)}
        placeholder="e.g. stephenking@lorem.com"
        className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
          emailErr ? "ring-strawberry-red focus:ring-strawberry-red" : ""
        }`}
      />
    </div>
  );
}
