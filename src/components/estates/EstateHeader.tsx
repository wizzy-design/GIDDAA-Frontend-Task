import { IoIosArrowForward } from "react-icons/io";
import BackButton from "../shared/BackButton";
import Link from "next/link";

interface HeaderProps {
  pageTitle: string;
  subPageTitle: string;
}

const EstateHeader: React.FC<HeaderProps> = ({ pageTitle, subPageTitle }) => {
  return (
    <header className="relative h-[140px] flex items-center  gap-2 border-b border-solid border-[#F0F0F0] pt-4 mb-12 lg:mb-0">
      <div className="flex items-center px-5 mb-4">
        <BackButton />
        <h1 className="ml-4 text-xl font-bold">{pageTitle}</h1>
      </div>

      <div className="flex items-center space-x-2 text-xs absolute bottom-3 left-5">
        <Link href="/properties">Estates</Link> <IoIosArrowForward />{" "}
        <span className="font-bold">{subPageTitle}</span>
      </div>
    </header>
  );
};

export default EstateHeader;
