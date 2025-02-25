import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-6">
        {/* Arrow buttons */}
        <div className="flex items-center gap-2.5">
          <button className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#F0F0F0]">
            <IoMdArrowDropleft className="text-black" size={22} />
          </button>
          <button className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#F0F0F0] opacity-50">
            <IoMdArrowDropright className="opacity-50" size={22} />
          </button>
        </div>

        <h2 className="font-millik font-semibold">My Properties</h2>
      </div>

      {/* Search Bar */}
      <div className="flex w-full max-w-[374px] items-center rounded-[100px] bg-[#F0F0F0] px-4 py-2">
        <Image src="search.svg" alt="Search Icon" width={20} height={20} />
        <input
          type="text"
          placeholder="Search for anything..."
          className="text-sx ml-2.5 flex-1 bg-transparent text-[#4B4B4B] outline-none placeholder:text-[#4B4B4B]"
        />
      </div>

      <div className="flex items-center gap-6">
        <HowItWorks />
        <button className="rounded-full bg-[#F0F0F0] p-2.5">
          <Image
            src="notification.svg"
            alt="Header icons"
            width={16}
            height={16}
          />
        </button>
        <button className="rounded-full bg-[#F0F0F0] p-2.5">
          <Image src="clock.svg" alt="Header icons" width={16} height={16} />
        </button>
        <button className="rounded-full bg-[#F0F0F0] p-2.5">
          <Image src="share.svg" alt="Header icons" width={16} height={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;

export function HowItWorks() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-full bg-[#F0F0F0] px-4 py-2.5">
          <Image
            src="howitworks.svg"
            alt="Header icons"
            width={16}
            height={16}
          />

          <span className="bg-gradient-to-b from-[#335F32] to-[#335F32] bg-clip-text font-bold text-transparent">
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
