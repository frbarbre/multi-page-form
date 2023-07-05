"use client";

import { useState, useEffect } from "react";
import { useStore } from "../store";
import { Switch } from "@headlessui/react";
import { shallow } from "zustand/shallow";

export default function BillingSwitch() {
  const [enabled, setEnabled] = useState(false);

  const [yearly, setYearly] = useStore(
    (state) => [state.yearly, state.setYearly],
    shallow
  );

  useEffect(() => {
    setEnabled(yearly);
  }, []);

  useEffect(() => {
    setYearly(enabled);
  }, [enabled]);

  return (
    <div className="flex items-center gap-4 justify-center md:mb-24">
      <p className={`${yearly === false ? "text-marine-blue" : "text-cool-gray"} font-medium transition-all`}>Monthly</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`bg-marine-blue relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <p className={`${yearly ? "text-marine-blue" : "text-cool-gray"} font-medium transition-all`}>Yearly</p>
    </div>
  );
}
