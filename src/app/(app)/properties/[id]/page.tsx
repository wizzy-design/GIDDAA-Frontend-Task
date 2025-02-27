"use client";

import { getEstateById } from "@/api/estates";
import EstateHeader from "@/components/estates/EstateHeader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loader from "@/components/shared/Loader";

const ViewHouse = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["estate", id],
    queryFn: () => getEstateById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching estate details for {id}
      </div>
    );
  }

  const estate = data?.value;
  if (!estate) return null;

  return (
    <section className="">
      <EstateHeader
        pageTitle={estate.name}
        subPageTitle={estate.name}
        viewHouse={true}
      />

      {/* Estate Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-6">
        {estate.images.length > 0 ? (
          estate.images.map((img: { document: string }, index: number) => (
            <div key={index} className="relative">
              <Image
                src={
                  img.document.includes(".webp")
                    ? "https://res.cloudinary.com/giddaa-dev/image/upload/c_scale,w_1000/f_auto/q_auto:good/cover-images/bed88eb5-16ff-48fc-83fa-b2e2a2b21ff3.jpeg"
                    : img.document || "/estate-image1.svg"
                }
                alt={`Estate image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <span className="absolute bottom-10 left-2 border border-solid border-[#2A4D29] rounded-[100px] bg-white px-2 py-1 text-xs font-bold text-[#2A4D29]">
                Side View
              </span>
              <span className="absolute bottom-2 left-2 bg-[#2A4D29] font-bold text-white px-2 py-1 text-xs rounded-[100px] border border-solid border-white">
                Actual Image
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center space-between w-full col-span-3 gap-3">
            {[
              "https://res.cloudinary.com/giddaa-dev/image/upload/c_scale,w_1000/f_auto/q_auto:good/cover-images/bed88eb5-16ff-48fc-83fa-b2e2a2b21ff3.jpeg",
              "https://res.cloudinary.com/giddaa-dev/image/upload/c_scale,w_1000/f_auto/q_auto:good/estates/b652f577-48b1-44eb-b955-e49ea10b8a77.jpeg",
              "https://res.cloudinary.com/giddaa-dev/image/upload/c_scale,w_1000/f_auto/q_auto:good/cover-images/bed88eb5-16ff-48fc-83fa-b2e2a2b21ff3.jpeg",
            ].map((src, index) => (
              <div key={index} className="relative">
                <Image
                  src={src}
                  alt={`Estate image`}
                  width={400}
                  height={300}
                  className="rounded-lg w-full object-cover"
                />
                <span className="absolute bottom-10 left-2 bg-black text-white px-2 py-1 text-xs rounded">
                  Side View
                </span>
                <span className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                  Actual Image
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Estate Details */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Estate Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">Name</span>{" "}
            <span className="text-sm">{estate.name}</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">State</span>{" "}
            <span className="text-sm">{estate.city.stateId}</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">City</span>{" "}
            <span className="text-sm">{estate.city.name}</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">Address</span>{" "}
            <span className="text-sm">{estate.address}</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">
              Popular Landmark
            </span>{" "}
            <span className="text-sm">{estate.landmark}</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">
              Estate Land Size
            </span>{" "}
            <span className="text-sm">{estate.landSize} Hectares</span>
          </p>
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">
              Completion Status
            </span>{" "}
            <span className="text-sm">
              {estate.completionStatus === "UNDER_CONSTRUCTION"
                ? "Under construction"
                : "Completed"}
            </span>
          </p>
          {/* Video Link */}
          {estate.videoUrl && (
            <p className="flex flex-col">
              <span className="capitalize text-xs font-bold">Video Url</span>{" "}
              <a
                href={estate.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Watch Here
              </a>
            </p>
          )}
          <p className="flex flex-col">
            <span className="capitalize text-xs font-bold">
              Number of Floors
            </span>{" "}
            <span className="text-sm">{estate.floors} floors</span>
          </p>
        </div>

        {/* Description */}
        <p className="flex flex-col mt-4">
          <span className="capitalize text-xs font-bold">Description</span>{" "}
          <span className="text-sm">{estate.description}</span>
        </p>
      </div>
    </section>
  );
};

export default ViewHouse;
