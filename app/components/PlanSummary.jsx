"use client";

import Link from "next/link";
import { useStore } from "../store";

export default function PlanSummary() {
  const yearly = useStore((store) => store.yearly);
  const plan = useStore((store) => store.plan);
  const price = useStore((store) => store.price)

  return (
    <div className="flex justify-between items-center mt-10 mb-8">
      <div>
        <h2 className="capitalize text-marine-blue font-medium">
          {plan} ({yearly ? "Yearly" : "Monthly"})
        </h2>
        <Link href={"/plan"} className="underline text-[14px] text-cool-gray">Change</Link>
      </div>
    <p className="font-bold text-marine-blue">${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}</p>
    </div>
  );
}
