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
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
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
      <ul className="flex items-center gap-4 border-b border-[#F0F0F0] px-5 text-[13px] lg:pt-3 overflow-x-auto hide-scrollbar">
        <li className="green-gradient-text relative cursor-pointer font-semibold">
          Details
          <span className="absolute -bottom-2 left-0 w-full border-b-2 border-[#335F32]"></span>
        </li>
        <li className="cursor-pointer py-2 font-semibold text-[#979797]">
          Properties
        </li>
        <li className="cursor-pointer py-2 font-semibold text-[#979797]">
          Allocation
        </li>
        <li className="cursor-pointer py-2 font-semibold text-[#979797]">
          Prospects
        </li>
        <li className="cursor-pointer py-2 font-semibold text-[#979797]">
          Analytics
        </li>
        <li className="cursor-pointer py-2 font-semibold text-[#979797]">
          Activity
        </li>
      </ul>
      {/* Estate Images */}
      <div className="m-6 grid grid-cols-1 gap-4 md:grid-cols-3">
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
                className="w-full rounded-lg object-cover"
              />
              <span className="absolute bottom-10 left-2 rounded-[100px] border border-solid border-[#2A4D29] bg-white px-2 py-1 text-xs font-bold text-[#2A4D29]">
                Side View
              </span>
              <span className="absolute bottom-2 left-2 rounded-[100px] border border-solid border-white bg-[#2A4D29] px-2 py-1 text-xs font-bold text-white">
                Actual Image
              </span>
            </div>
          ))
        ) : (
          <div className="space-between col-span-3 flex w-full items-center gap-3">
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
                  className="w-full rounded-lg object-cover"
                />
                <span className="absolute bottom-10 left-2 rounded-[100px] border border-solid border-[#2A4D29] bg-white px-2 py-1 text-xs font-bold text-[#2A4D29]">
                  Side View
                </span>
                <span className="absolute bottom-2 left-2 rounded-[100px] border border-solid border-white bg-[#2A4D29] px-2 py-1 text-xs font-bold text-white">
                  Actual Image
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Estate Details */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="mb-4 flex items-center">
          <h2 className="font-millik text-2xl font-semibold tracking-wider">
            Estate Details
          </h2>
          <div className="ml-2 flex-grow border-t border-solid border-[#F0F0F0]"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">Name</span>{" "}
            <span className="text-sm">{estate.name}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">State</span>{" "}
            <span className="text-sm">{estate.city.stateId}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">City</span>{" "}
            <span className="text-sm">{estate.city.name}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">Address</span>{" "}
            <span className="text-sm">{estate.address}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">
              Popular Landmark
            </span>{" "}
            <span className="text-sm">{estate.landmark}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">
              Estate Land Size
            </span>{" "}
            <span className="text-sm">{estate.landSize} Hectares</span>
          </p>
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">
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
              <span className="text-xs font-bold uppercase">Video Url</span>{" "}
              <a
                href={estate.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Watch Here
              </a>
            </p>
          )}
          <p className="flex flex-col">
            <span className="text-xs font-bold uppercase">
              Number of Floors
            </span>{" "}
            <span className="text-sm">{estate.floors} floors</span>
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 flex flex-col">
          <span className="text-xs font-bold uppercase">Description</span>{" "}
          <span className="text-sm">{estate.description}</span>
        </p>
      </div>
    </section>
  );
};

export default ViewHouse;
