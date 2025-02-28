"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EstateCard from "./EstateCard";
import { getAllEstates } from "@/api/estates";
import { Estate } from "@/models/estate";
import Loader from "../shared/Loader";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Link from "next/link";

const Estates = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["estates", pageNumber],
    queryFn: () => getAllEstates(pageNumber),
  });

  const handleNextPage = () => {
    if (data && data?.value.totalPages > pageNumber) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="px-6 py-8 md:px-4 lg:px-5 lg:py-0">
      <div className="flex items-center justify-between py-6">
        <h2 className="font-millik text-xl lg:text-2xl">
          {isLoading ? (
            <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
          ) : (
            `Estates - ${data?.value.totalRecords}`
          )}
        </h2>

        <Link href={"/create-estate"}>
          <button className="h-[40px] min-w-[122px] rounded-[100px] bg-[#346633] px-1.5 py-2 text-sm font-bold text-white">
            + Create Estate
          </button>
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data?.value.data?.map((estate: Estate) => (
            <EstateCard
              key={estate.id}
              estateImage={
                estate.organization?.coverImage || "/placeholder-estate-img.png"
              }
              estateName={estate.name}
              numberOfHouses={estate.houseStats.totalHouses}
              estateAddress={estate.address}
              estateId={estate.id}
            />
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="my-7 flex w-full flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePreviousPage}
              disabled={pageNumber === 1}
              className={`${
                pageNumber === 1 ? "cursor-not-allowed" : ""
              } bg-[#F0F0F0] rounded-[4px] p-2 transform transition-transform duration-150 active:scale-95`}
            >
              <FaCaretLeft className="text-[#979797]" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={data && pageNumber === data?.value.totalPages}
              className="transform rounded-[4px] bg-opacity-20 bg-gradient-to-b from-[#335F32] to-[#335F32] p-2 transition-transform duration-150 active:scale-95"
            >
              <FaCaretRight className="text-white" />
            </button>
          </div>

          <div className="green-gradient-text">
            View{" "}
            {data?.value.totalRecords -
              data?.value.pageNumber * data?.value.pageSize}{" "}
            more
          </div>
        </div>
      )}
    </section>
  );
};

export default Estates;
