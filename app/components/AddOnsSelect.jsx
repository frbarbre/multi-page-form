import { NavigationButtons, Checkboxes } from ".";

export default function AddOnSelect() {

  return (
    <div className="md:min-h-[60vh] w-full p-8 md:pb-0 shadow-2xl md:shadow-none flex flex-col justify-between">
      <div className="max-w-[452px] mx-auto w-full">
        <div>
          <h1 className="font-bold text-[24px] md:text-[32px] text-marine-blue">
            Pick add-ons
          </h1>
          <p className="mt-1 text-cool-gray text-[14px]">
            Add-ons help enhance your gaming experience.
          </p>
          <Checkboxes />
        </div>
      </div>
      <div className="hidden md:block">
        <NavigationButtons />
      </div>
    </div>
  );
}
