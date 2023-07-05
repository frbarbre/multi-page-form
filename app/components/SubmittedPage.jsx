"use client";

import { useStore } from "../store";

export default function SubmittedPage() {
  const name = useStore((store) => store.name);

  return (
    <div className="md:min-h-[60vh] w-full p-8 shadow-2xl md:shadow-none flex flex-col justify-between">
      <div className="max-w-[452px] mx-auto w-full h-full">
        <div className="flex flex-col items-center justify-center gap-6 py-12 h-full">
          <img src="/icon-thank-you.svg" alt="thank-you-icon" />
          <h1 className="text-marine-blue font-bold text-[24px] text-center">Thank you {name}!</h1>
          <p className="text-cool-gray text-[14px] text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}
