import Image from "next/image";

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

        <p className="green-gradient-border absolute left-2 top-2 text-sm font-semibold">
          <span
            className="bg-clip-text text-transparent"
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
    </section>
  );
};

export default EstateCard;
