"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`green-gradient-border2  rounded-full ${
        pathname.includes("properties") ? "absolute top-14 lg:static" : ""
      }`}
    >
      <div className="px-3 py-0 green-gradient-text flex items-center gap-0.5 text-sm font-bold">
        <IoIosArrowRoundBack size={35} className="text-[#335F32]" />{" "}
        <span
          className={`${
            pathname.includes("properties") ? "hidden lg:inline" : ""
          } `}
        >
          Back
        </span>
      </div>
    </button>
  );
};

export default BackButton;
