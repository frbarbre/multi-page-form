import { useStore } from "../store";

export default function Checkbox({
  title,
  description,
  price,
  value,
  setValue,
}) {
  function handleChange() {
    setValue(!value);
  }

  function handleClick() {
    setValue(!value);
  }

  const yearly = useStore((store) => store.yearly);

  return (
    <div
      className={`w-full rounded-lg border-[1px] border-solid hover:border-purplish-blue transition-all cursor-pointer ${
        value ? "border-purplish-blue" : "border-cool-gray"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-4">
          <input
            type="checkbox"
            checked={value}
            name={title}
            onChange={handleChange}
            className="accent-purplish-blue"
          />
          <div>
            <h2 className="font-medium text-marine-blue">{title}</h2>
            <p className="text-[14px] text-cool-gray">{description}</p>
          </div>
        </div>
        <p className="text-purplish-blue">
          +${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
}
