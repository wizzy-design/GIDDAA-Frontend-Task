"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EstateCard from "./EstateCard";
import { getAllEstates } from "@/api/estates";
import { Estate } from "@/models/estate";
import Loader from "../shared/Loader";

const Estates = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["estates", pageNumber],
    queryFn: () => getAllEstates(pageNumber),
  });

  const handleNextPage = () => {
    if (data && data.totalPages > pageNumber) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="px-2 md:px-4 lg:px-5">
      <div className="flex justify-between items-center py-6">
        <h2 className="text-xl lg:text-2xl">
          {isLoading ? (
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
          ) : (
            `Estates - ${data.value.totalRecords}`
          )}
        </h2>

        <button className="bg-[#346633] py-2 rounded-[100px] w-[122px]  text-white h-[40px] px-1.5">
          + Create Estate
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.value.data?.map((estate: Estate) => (
            <EstateCard
              key={estate.id}
              estateImage={
                estate.organization?.coverImage || "/placeholder-estate-img.png"
              }
              estateName={estate.name}
              numberOfHouses={estate.houseStats.totalHouses}
              estateAddress={estate.address}
            />
          ))}
        </div>
      )}

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={data && pageNumber === data.totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Estates;
