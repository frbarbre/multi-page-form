"use client";

import { shallow } from "zustand/shallow";
import { Checkbox } from ".";
import { useStore } from "../store";
import { useState } from "react";

export default function Checkboxes() {
  // Add-on prices
  const onlineServicePrice = useStore((store) => store.onlineServicePrice);
  const largerStoragePrice = useStore((store) => store.largerStoragePrice);
  const customProfilePrice = useStore((store) => store.customProfilePrice);

  // Checkbox states
  const [onlineService, setOnlineService] = useStore(
    (state) => [state.onlineService, state.setOnlineService],
    shallow
  );

  const [largerStorage, setLargerStorage] = useStore(
    (state) => [state.largerStorage, state.setLargerStorage],
    shallow
  );

  const [customProfile, setCustomProfile] = useStore(
    (state) => [state.customProfile, state.setCustomProfile],
    shallow
  );
  return (
    <div className="flex flex-col gap-4 mt-6 mb-16">
      <Checkbox
        title={"Online service"}
        description={"Access to multiplayer games"}
        price={onlineServicePrice}
        value={onlineService}
        setValue={setOnlineService}
      />

      <Checkbox
        title={"Larger storage"}
        description={"Extra 1TB of cloud save"}
        price={largerStoragePrice}
        value={largerStorage}
        setValue={setLargerStorage}
      />

      <Checkbox
        title={"Customizable Profile"}
        description={"Custom theme on your profile"}
        price={customProfilePrice}
        value={customProfile}
        setValue={setCustomProfile}
      />
    </div>
  );
}
