"use client";

import { IoIosArrowForward } from "react-icons/io";
import BackButton from "../shared/BackButton";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { usePathname } from "next/navigation";

interface HeaderProps {
  pageTitle: string;
  subPageTitle: string;
  viewHouse?: boolean;
}

const EstateHeader: React.FC<HeaderProps> = ({
  pageTitle,
  subPageTitle,
  viewHouse = false,
}) => {
  const pathname = usePathname();

  return (
    <header className="relative mb-8 flex h-[240px] items-center gap-2 border-b border-solid border-[#F0F0F0] pt-4 lg:mb-0 lg:h-[140px] lg:pt-4">
      <div className="gap-x-3 mb-4 flex w-full flex-col items-start gap-y-4 px-5 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:pl-5 lg:pr-0">
        <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start">
          <BackButton />
          <h1 className="ml-4 font-millik text-xl font-bold tracking-wider">
            <span className="hidden lg:block">{pageTitle}</span>
          </h1>
        </div>

        {viewHouse && (
          <div className="flex items-center gap-3 absolute right-4 top-[-1.5px]  lg:static lg:justify-end">
            <button className="flex text-nowrap h-[33.999995749028542] w-[32.133337127015754] lg:h-[40px] lg:min-w-[122px] lg:w-2/3 justify-center  items-center gap-3 rounded-[100px] bg-[#346633] lg:px-6 lg:py-2 text-sm font-bold text-white">
              <Image
                src="/editEstate-white.svg"
                alt="Edit Estate icon"
                width={16}
                height={16}
              />
              <span
                className={`${
                  pathname.includes("properties") ? "hidden lg:inline" : ""
                } `}
              >
                Update Estate
              </span>
            </button>

            <EstateHeaderPopup />
          </div>
        )}
      </div>

      {/* Page title for mobile */}
      <h1 className="ml-4 font-millik text-xl font-bold tracking-wider">
        <span className="absolute left-5 bottom-10  lg:hidden">
          {pageTitle}
        </span>
      </h1>

      <div className="absolute bottom-1 left-5 flex items-center space-x-2 text-xs max-w-[90%]">
        <Link href="/properties">Estates</Link> <IoIosArrowForward />{" "}
        <span className="font-bold lg:max-w-full truncate">{subPageTitle}</span>
      </div>
    </header>
  );
};

export default EstateHeader;

function EstateHeaderPopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[33.999995749028542] w-[32.133337127015754] items-center justify-center gap-2 rounded-full bg-[#F0F0F0]">
          <Image
            src="/3-dots.svg"
            alt="3 dots icons"
            width={16}
            height={16}
            className="rotate-90"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] bg-white shadow-sm"
        sideOffset={16}
        align="start"
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-2.5 text-xs">
            <Image
              src="/House3.svg"
              alt="Add House icon"
              width={16}
              height={16}
            />{" "}
            Add House
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <Image src="/share.svg" alt="Share icon" width={16} height={16} />{" "}
            Share Estate
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <Image
              src="/QRCode.svg"
              alt="QR Code icon"
              width={16}
              height={16}
            />{" "}
            QR code
          </li>
          <li className="flex items-center gap-2.5 text-xs text-[#E40000]">
            <Image
              src="/deleteEstate.svg"
              alt="Delete Estate icon"
              width={16}
              height={16}
            />{" "}
            Delete Estate
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
