import { CapitalizeFirstLetter } from "@/lib/utils";

export default function Switch({
  optionTwoState,
  setOptionTwoState,
  option1,
  option2,
}: {
  optionTwoState: boolean;
  setOptionTwoState: (state: boolean) => void;
  option1: string;
  option2: string;
}) {
  return (
    <div className="flex gap-x-1 items-center ">
      <span>{CapitalizeFirstLetter(option1)}</span>
      <button
        onClick={() => setOptionTwoState(!optionTwoState)}
        className="w-10 h-5 bg-[#ccc] rounded-[10px] relative cursor-pointer"
      >
        <div
          className={`absolute top-[1px] w-[18px] h-[18px] bg-black rounded-full transition-[left_0.2s_ease] ${
            optionTwoState ? "left-[21px]" : "left-[1px]"
          }`}
        ></div>
      </button>
      <span>{CapitalizeFirstLetter(option2)}</span>
    </div>
  );
}
