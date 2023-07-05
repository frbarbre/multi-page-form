'use client'

import { useStore } from "../store";
import { useState, useEffect } from "react";
import { shallow } from "zustand/shallow";

export default function NameInput() {
  const [namePressed, setNamePressed] = useState(false);

  const [nameErr, setNameErr] = useStore(
    (state) => [state.nameErr, state.setNameErr],
    shallow
  );

  const [name, setName] = useStore(
    (state) => [state.name, state.setName],
    shallow
  );

  useEffect(() => {
    if (namePressed) {
      if (name === "") {
        setNameErr(true);
      } else {
        setNameErr(false);
      }
    }
  }, [name]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <label className="text-marine-blue text-[14px]" htmlFor="name">
          Name
        </label>
        {nameErr && (
          <p className="text-[14px] text-strawberry-red">Name can't be empty</p>
        )}
      </div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={() => setNamePressed(true)}
        placeholder="e.g. Stephen King"
        className={`w-full outline-none ring-[1px] ring-cool-gray p-3 rounded-lg focus:ring-marine-blue ${
          nameErr ? "ring-strawberry-red focus:ring-strawberry-red" : ""
        }`}
      />
    </div>
  );
}
