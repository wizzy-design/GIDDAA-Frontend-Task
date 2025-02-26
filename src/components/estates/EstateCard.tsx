import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EstateCardProps {
  estateImage: string;
  estateName: string;
  numberOfHouses: number;
  estateAddress: string;
}

const EstateCard: React.FC<EstateCardProps> = ({
  estateImage,
  estateName,
  numberOfHouses,
  estateAddress,
}) => {
  return (
    <section className="max-w-[300px] overflow-hidden rounded-[8px] border border-solid border-[#D9D9D9] shadow-[0px_4px_4px_1px_#00000003]">
      <div className="relative min-h-[110.66666412353516px] w-full bg-red-500">
        {/* Estate Image */}
        <Image
          src={estateImage}
          alt={`${estateName} Image`}
          className="object-cover"
          fill
        />

        <p className="green-gradient-border absolute left-2 top-2  text-sm font-semibold h-[21px]">
          <span
            className="bg-clip-text text-transparent px-3"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #335F32, #335F32), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
          >
            {numberOfHouses} Houses
          </span>
        </p>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{estateName}</h2>
        <p className="text-sm text-gray-600">{estateAddress}</p>
      </div>

      <EstateOptions />
    </section>
  );
};

export default EstateCard;

function EstateOptions() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[36px] items-center gap-2 rounded-full bg-[#F0F0F0] px-4 py-2">
          <Image
            src="3-dots.svg"
            alt="3 dots icons"
            width={16}
            height={16}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] shadow-sm bg-white"
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
