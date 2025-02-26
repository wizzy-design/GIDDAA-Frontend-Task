"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className=" green-gradient-border2  rounded-full"
    >
      <div className="px-3 py-0 green-gradient-text flex items-center gap-0.5 text-sm font-bold">
        <IoIosArrowRoundBack size={35} className="text-[#335F32]" /> Back
      </div>
    </button>
  );
};

export default BackButton;
