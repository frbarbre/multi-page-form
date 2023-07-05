"use client";

import { nanoid } from "nanoid";
import { useStore } from "../store";
import { useEffect, useState } from "react";

export default function AddOnsSummary() {
  const onlineService = useStore((store) => store.onlineService);
  const largerStorage = useStore((store) => store.largerStorage);
  const customProfile = useStore((store) => store.customProfile);

  // Add-on prices
  const onlineServicePrice = useStore((store) => store.onlineServicePrice);
  const largerStoragePrice = useStore((store) => store.largerStoragePrice);
  const customProfilePrice = useStore((store) => store.customProfilePrice);

  let price = useStore((store) => store.price);

  const yearly = useStore((store) => store.yearly)

  const [data] = useState([
    {
      title: "Online service",
      active: onlineService,
      price: onlineServicePrice,
    },
    {
      title: "Larger storage",
      active: largerStorage,
      price: largerStoragePrice,
    },
    {
      title: "Custom profile",
      active: customProfile,
      price: customProfilePrice,
    },
  ]);

  let filteredArray = data.filter((data) => data.active === true);

  let priceTotal = useStore((store) => store.priceTotal);

  const setPriceTotal = useStore((store) => store.setPriceTotal)

  useEffect(() => {
    priceTotal = price;
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {filteredArray.map((data) => {
        priceTotal = price += data.price;
        setPriceTotal(priceTotal)
        return (
          <div className="flex justify-between items-center text-[14px]" key={nanoid()}>
            <p className="text-cool-gray">{data.title}</p>
            <p className="text-marine-blue">+${yearly ? data.price * 10 : data.price}/{yearly ? "yr" : "mo"}</p>
          </div>
        );
      })}
    </div>
  );
}
