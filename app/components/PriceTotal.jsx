"use client";

import { useStore } from "../store";

export default function PriceTotal() {
  const priceTotal = useStore((store) => store.priceTotal);
  const yearly = useStore((store) => store.yearly);

  return (
    <div className="mt-8 mb-8 flex justify-between items-center">
      <p className="text-cool-gray text-[14px]">Total (per {yearly ? "year" : "month"})</p>
      <h2 className="text-purplish-blue font-bold text-[24px]">
        ${yearly ? priceTotal * 10 : priceTotal}/{yearly ? "yr" : "mo"}
      </h2>
    </div>
  );
}
