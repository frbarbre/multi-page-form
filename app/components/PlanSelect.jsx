import { planCards } from "../constants";
import { PlanCard, NavigationButtons, BillingSwitch } from ".";
import { nanoid } from "nanoid";

export default function PlanSelect() {
  return (
    <div className="md:min-h-[60vh] w-full p-8 md:pb-0 shadow-2xl md:shadow-none flex flex-col justify-between">
      <div className="max-w-[452px] mx-auto w-full">
        <div>
          <h1 className="font-bold text-[24px] md:text-[32px] text-marine-blue">
            Select your plan
          </h1>
          <p className="mt-1 text-cool-gray text-[14px]">
            You have the option of monthly or yearly billing.
          </p>
          <div className="flex justify-center gap-4 flex-col md:flex-row my-8">
            {planCards.map((card) => (
              <PlanCard key={nanoid()} {...card} />
            ))}
          </div>
          <BillingSwitch />
        </div>
      </div>
      <div className="hidden md:block">
        <NavigationButtons />
      </div>
    </div>
  );
}
