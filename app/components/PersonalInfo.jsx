'use client'

import { NavigationButtons, NameInput, EmailInput, PhoneInput } from ".";

export default function PersonalInfo() {
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-between gap-4 w-full md:self-start md:min-h-[60vh]"
      >
        <div className="shadow-2xl w-full bg-white rounded-lg md:shadow-none p-8">
          <div className="md:max-w-[452px] mx-auto">
            <h1 className="font-bold text-[24px] md:text-[32px] text-marine-blue">
              Personal Info
            </h1>
            <p className="mt-1 text-cool-gray text-[14px]">
              Please provide your name, email address, and phone number.
            </p>

            <div className="w-full flex flex-col gap-6 mt-6">
              <NameInput />
              <EmailInput />
              <PhoneInput />
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
