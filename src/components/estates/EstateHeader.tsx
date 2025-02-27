import { IoIosArrowForward } from "react-icons/io";
import BackButton from "../shared/BackButton";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
  return (
    <header className="relative lg:h-[140px] h-[200px] flex items-center  gap-2 border-b border-solid border-[#F0F0F0] pt-4 lg:pt-4 mb-12 lg:mb-0">
      <div className="flex flex-col lg:flex-row  items-start  lg:items-center px-8 mb-4 lg:justify-between w-full gap-3 ">
        <div className="flex items-center">
          <BackButton />
          <h1 className="ml-4 text-xl font-bold">{pageTitle}</h1>
        </div>

        {viewHouse && (
          <div className="flex items-center gap-3">
            <button className="bg-[#346633] py-2 rounded-[100px] min-w-[122px]  text-white h-[40px] px-3 text-sm font-bold flex items-center gap-3">
              <Image
                src="/editEstate-white.svg"
                alt="Edit Estate icon"
                width={16}
                height={16}
              />{" "}
              Update Estate
            </button>

            <EstateHeaderPopup />
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2 text-xs absolute bottom-3 left-5">
        <Link href="/properties">Estates</Link> <IoIosArrowForward />{" "}
        <span className="font-bold">{subPageTitle}</span>
      </div>
    </header>
  );
};

export default EstateHeader;

function EstateHeaderPopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[33.999995749028542] justify-center items-center gap-2 rounded-full bg-[#F0F0F0] w-[32.133337127015754]">
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
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] shadow-sm bg-white"
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
