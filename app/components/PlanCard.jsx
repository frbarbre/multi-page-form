"use client";

import { shallow } from "zustand/shallow";
import { useStore } from "../store";

export default function PlanCard({ title, image, pricing, id }) {
  const [plan, setPlan] = useStore(
    (state) => [state.plan, state.setPlan],
    shallow
  );

  const yearly = useStore((store) => store.yearly);

  const setPrice = useStore((store) => store.setPrice);

  function handleClick() {
    setPlan(id);
    setPrice(pricing);
  }

  return (
    <div
      className={`${
        plan === id ? "border-purplish-blue" : "border-cool-gray"
      } w-full md:max-w-[140px] md:h-[160px] rounded-lg border-[1px] border-solid hover:border-purplish-blue cursor-pointer p-4 flex gap-4 md:flex-col md:justify-between transition-all`}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={`${id}-icon`}
        className="w-[40px] aspect-square object-contain"
      />
      <article>
        <h2 className="font-medium text-marine-blue">{title}</h2>
        <p className="text-cool-gray text-[12px]">
          ${yearly ? pricing * 10 : pricing}/{yearly ? "yr" : "mo"}
        </p>
        {yearly && (
          <p className="text-marine-blue text-[10px]">2 months free</p>
        )}
      </article>
    </div>
  );
}
