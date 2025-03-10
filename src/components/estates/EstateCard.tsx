import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

interface EstateCardProps {
  estateImage: string;
  estateName: string;
  numberOfHouses: number;
  estateAddress: string;
  estateId: string;
}

const EstateCard: React.FC<EstateCardProps> = ({
  estateImage,
  estateName,
  numberOfHouses,
  estateAddress,
  estateId,
}) => {
  return (
    <section className="relative h-[290px] w-full overflow-hidden rounded-[8px] border border-solid border-[#D9D9D9] shadow-[0px_4px_4px_1px_#00000003]">
      <div className="relative min-h-[110.66666412353516px] w-full">
        {/* Estate Image */}
        <Image
          src={estateImage}
          alt={`${estateName} Image`}
          className="object-cover"
          fill
        />

        <p className="green-gradient-border absolute left-2 top-2 h-[21px] text-sm font-semibold">
          <span
            className="bg-clip-text px-3 text-transparent"
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
        <h2 className="text-center text-lg font-semibold">{estateName}</h2>
        <p className="text-ellipsis text-center text-sm text-gray-600">
          {estateAddress}
        </p>
      </div>

      <div className="absolute bottom-3 right-3">
        <EstateOptions estateId={estateId} />
      </div>
    </section>
  );
};

export default EstateCard;

function EstateOptions({ estateId }: { estateId: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-[#F0F0F0]">
          <Image src="3-dots.svg" alt="3 dots icons" width={16} height={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit rounded-[15px] border border-solid border-[#E1E1E1] bg-white shadow-sm"
        sideOffset={16}
        align="start"
      >
        <ul className="space-y-4">
          <li>
            <Link
              href={`/properties/${estateId}`}
              className="flex items-center gap-2.5 text-xs"
            >
              <Image
                src="viewHouse.svg"
                alt="View House icon"
                width={16}
                height={16}
              />{" "}
              View House
            </Link>
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <Image
              src="editEstate.svg"
              alt="Edit Estate icon"
              width={16}
              height={16}
            />{" "}
            Edit Estate
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <Image
              src="addHouse.svg"
              alt="Add House icon"
              width={16}
              height={16}
            />{" "}
            Add House
          </li>
          <li className="flex items-center gap-2.5 text-xs text-[#E40000]">
            <Image
              src="deleteEstate.svg"
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
