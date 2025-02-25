import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <header className="flex h-[140px] flex-col gap-2 border-b border-solid border-[#F0F0F0] pt-4">
      <div className="flex flex-col items-center justify-between p-4 px-5 md:flex-row md:items-start">
        <div className="mb-4 flex items-center gap-4 md:mb-0 md:gap-6">
          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#F0F0F0] md:h-4 md:w-4">
              <IoMdArrowDropleft className="text-black" size={22} />
            </button>
            <button className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#F0F0F0] opacity-50 md:h-4 md:w-4">
              <IoMdArrowDropright className="opacity-50" size={22} />
            </button>
          </div>

          <h2 className="font-millik text-lg font-semibold md:text-base">
            My Properties
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex h-[35px] w-full max-w-full items-center rounded-[100px] bg-[#F0F0F0] px-4 py-2 md:mb-0 md:max-w-[374px]">
          <Image src="search.svg" alt="Search Icon" width={20} height={20} />
          <input
            type="text"
            placeholder="Search for anything..."
            className="ml-2.5 flex-1 bg-transparent text-sm text-[#4B4B4B] outline-none placeholder:text-[#4B4B4B]"
          />
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <HowItWorks />
          <button className="rounded-full bg-[#F0F0F0] p-2">
            <Image
              src="notification.svg"
              alt="Header icons"
              width={16}
              height={16}
            />
          </button>
          <button className="rounded-full bg-[#F0F0F0] p-2">
            <Image src="clock.svg" alt="Header icons" width={16} height={16} />
          </button>
          <button className="rounded-full bg-[#F0F0F0] p-2">
            <Image src="share.svg" alt="Header icons" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className="px-5">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2 text-xs font-semibold">
            <button className="rounded-full border border-solid border-[#F0F0F0] p-2">
              <Image
                src="houses.svg"
                alt="Houses icons"
                width={18.666667938232422}
                height={17.33333396911621}
              />
            </button>
            5 ESTATES
          </li>

          <li className="flex items-center gap-2 text-xs font-semibold">
            <button className="rounded-full border border-solid border-[#F0F0F0] p-2">
              <Image
                src="house2.svg"
                alt="House icon"
                width={12.961620330810547}
                height={11.262231826782227}
              />
            </button>
            5 ESTATES{" "}
            <Image src="dot-divide.svg" alt="Dot icon" width={4} height={4} />7
            UNITS
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

export function HowItWorks() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[36px] items-center gap-2 rounded-full bg-[#F0F0F0] px-4 py-2">
          <Image
            src="howitworks.svg"
            alt="Header icons"
            width={16}
            height={16}
          />

          <span className="bg-gradient-to-b from-[#335F32] to-[#335F32] bg-clip-text text-sm font-bold text-transparent">
            How It Works
          </span>

          <Image
            src="arrow-down.svg"
            alt="Arrow down icons"
            width={10.921088954950041}
            height={4.188538462887238}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] shadow-sm"
        sideOffset={16}
        align="start"
      >
        <ul className="space-y-2">
          <li className="flex items-center gap-2.5">
            <Image src="tour.svg" alt="Tour icon" width={16} height={16} />{" "}
            Product Tour & Guide
          </li>
          <li className="flex items-center gap-2.5">
            <Image src="play.svg" alt="Play icon" width={16} height={16} />{" "}
            Video Tutorial
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
