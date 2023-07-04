"use client";

import { useStore } from "../store";
import { useEffect, useState } from "react";
import { NavigationButtons } from ".";
import shallow from "zustand/shallow";

export default function PersonalInfo() {
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const [namePressed, setNamePressed] = useState(false);

  const [name, setName] = useStore(
    (state) => [state.name, state.setName],
    shallow
  );

  const [email, setEmail] = useStore(
    (state) => [state.email, state.setEmail],
    shallow
  );

  const [phoneNumber, setPhoneNumber] = useStore(
    (state) => [state.phoneNumber, state.setPhoneNumber],
    shallow
  );

  function handleNameChange(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    if (namePressed) {
      if (name == "") {
        setNameErr(true);
        console.log(name);
      } else {
        setNameErr(false);
        console.log(name);
      }
    }
  }, [name]);

  function handleMailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className="w-full ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-between gap-4 w-full md:self-start md:min-h-[60vh]"
      >
        <div className="shadow-2xl w-full bg-white rounded-lg md:shadow-none p-8">
          <div className="md:max-w-[400px] mx-auto">
            <h1 className="font-bold text-[24px] md:text-[32px] text-marine-blue">
              Personal Info
            </h1>
            <p className="mt-1 text-cool-gray text-[14px]">
              Please provide your name, email address, and phone number.
            </p>

            <div className="w-full flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-1">
                <label className="text-marine-blue text-[14px]" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  onKeyDown={() => setNamePressed(true)}
                  placeholder="e.g. Stephen King"
                  className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
                    nameErr
                      ? "ring-strawberry-red focus:ring-strawberry-red"
                      : ""
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-marine-blue text-[14px]" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleMailChange}
                  placeholder="e.g. stephenking@lorem.com"
                  className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
                    emailErr ? "ring-strawberry-red" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-marine-blue text-[14px]" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="e.g. +1 234 567 890"
                  className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
                    phoneErr ? "ring-strawberry-red" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <NavigationButtons />
        </div>
      </form>
    </div>
  );
}
