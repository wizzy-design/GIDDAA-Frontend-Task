"use client";

import EstateHeader from "@/components/estates/EstateHeader";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getCountries,
  getCities,
  getStates,
  createEstate,
} from "@/api/estates";
import useUser from "@/context/UserContext";
import Image from "next/image";
import { CreateEstateTypes } from "@/models/estate";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CreateEstate() {
  const router = useRouter();
  const { userObject } = useUser();
  const [estateDetails, setEstateDetails] = useState({
    name: "",
    cityId: "",
    address: "",
    videoUrl: "",
    ownerType: "",
    landmark: "",
    description: "",
    completionStatus: "UNDER_CONSTRUCTION",
    completionDate: "2025-01-30T12:38:14.920Z",
    completionLevel: 0,
    longitude: 0,
    latitude: 0,
    features: [],
    landSize: 0,
    organizationId: userObject?.organizationId,
    floors: 0,
  });

  const {
    mutate: createEstateMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async (newEstate: CreateEstateTypes) => {
      const response = await createEstate(newEstate);
      return response;
    },
    onSuccess: () => {
      toast.success("Estate created successfully");
      router.push("/properties");
    },
    onError: (error) => {
      console.error("Error creating estate:", error);
    },
  });

  const handleCreateEstate = () => {
    createEstateMutation(estateDetails);
  };

  return (
    <div className="min-h-screen">
      <EstateHeader pageTitle="Creating Estate" subPageTitle="Create Estate" />

      <div className="mx-auto rounded-lg bg-white p-6">
        <ImageUploader />
        <EstateForm
          estateDetails={estateDetails}
          setEstateDetails={setEstateDetails}
        />
      </div>

      <div className="fixed bottom-0 w-full bg-[#F0F0F0] py-5">
        <div className="flex w-full translate-x-[34%] gap-3">
          <button className="rounded-[100px] border border-solid border-[#346633] px-4 py-2 font-bold text-[#346633]">
            Cancel
          </button>
          <button
            className="rounded-[100px] bg-[#346633] px-4 py-2 font-bold text-white"
            onClick={handleCreateEstate}
            disabled={isPending}
          >
            {isPending ? "Creating Estate..." : "Create Estate"}
          </button>
        </div>
        {isError && <p style={{ color: "red" }}>{error?.message}</p>}
      </div>
    </div>
  );
}

function ImageUploader() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...uploadedImages]);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col items-center gap-2 rounded-lg border-2 border-dashed p-6">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageUpload}
          />
          <div className="rounded-xl bg-[linear-gradient(0deg,#335F32,#335F32),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] p-1">
            <HiPlus size={40} className="text-white" />
          </div>
          <p className="text-xs font-bold capitalize text-[#335F32]">
            add estate images
          </p>
        </label>
      </div>

      <div className="mt-4 flex gap-2">
        {images.map((image, index) => (
          <div key={index} className="group relative max-w-[60px]">
            <div className="relative">
              <Image
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="h-16 w-16 rounded-[5px] object-cover"
                width={20}
                height={20}
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex gap-2">
                  <div className="flex h-[19px] w-[19px] cursor-pointer items-center justify-center rounded-full bg-white">
                    <Image
                      src="/editEstate.svg"
                      alt="Edit"
                      width={8.769230842590332}
                      height={8.769230842590332}
                    />
                  </div>
                  <div className="flex h-[19px] w-[19px] cursor-pointer items-center justify-center rounded-full bg-white">
                    <Image
                      src="/deleteEstate.svg"
                      alt="Delete"
                      width={7.125}
                      height={9.5}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-1 text-center text-xs font-bold text-[#335F32]">
              {image.name.length > 15
                ? `${image.name.substring(0, 12)}...`
                : image.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function EstateForm({ estateDetails, setEstateDetails }) {
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);

  const { data: countries, isLoading: countriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(1, 855),
  });

  const { data: states, isLoading: statesLoading } = useQuery({
    queryKey: ["states", selectedCountryId],
    queryFn: () => getStates(selectedCountryId || "", 1, 100),
    enabled: !!selectedCountryId,
  });

  const { data: cities, isLoading: citiesLoading } = useQuery({
    queryKey: ["cities", selectedStateId],
    queryFn: () => getCities(selectedStateId || "", 1, 100),
    enabled: !!selectedStateId,
  });

  return (
    <form className="grid grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium">
          Name
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          value={estateDetails.name}
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, name: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Country
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          onChange={(e) => setSelectedCountryId(e.target.value)}
        >
          <option value="">Select a country</option>
          {countriesLoading ? (
            <option>Loading...</option>
          ) : (
            countries?.value?.data?.map(
              (country: { id: string; name: string }) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              )
            )
          )}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          State
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          onChange={(e) => setSelectedStateId(e.target.value)}
        >
          <option value="">Select a state</option>
          {statesLoading ? (
            <option>Loading...</option>
          ) : (
            states?.value?.data?.map((state: { id: string; name: string }) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          City
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, cityId: e.target.value })
          }
        >
          <option value="">Select a city</option>
          {citiesLoading ? (
            <option>Loading...</option>
          ) : (
            cities?.value?.data?.map((city: { id: string; name: string }) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          Address
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          value={estateDetails.address}
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, address: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Popular Landmark</label>
        <input
          type="text"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          value={estateDetails.landmark}
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, landmark: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Estate Land (In Hectares)
          <span className="text-[#E40000]">*</span>
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          value={estateDetails.landSize}
          onChange={(e) =>
            setEstateDetails({
              ...estateDetails,
              landSize: parseFloat(e.target.value),
            })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Completion Status
          <span className="text-[#E40000]">*</span>
        </label>
        <select
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          required
          value={estateDetails.completionStatus}
          onChange={(e) =>
            setEstateDetails({
              ...estateDetails,
              completionStatus: e.target.value,
            })
          }
        >
          <option value="UNDER_CONSTRUCTION">Under Construction</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Video URL</label>
        <input
          type="text"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          value={estateDetails.videoUrl}
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, videoUrl: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Number of Floors</label>
        <input
          type="number"
          className="mt-1 w-full rounded-[100px] border px-3 py-2 text-xs"
          value={estateDetails.floors}
          onChange={(e) =>
            setEstateDetails({
              ...estateDetails,
              floors: parseInt(e.target.value),
            })
          }
        />
      </div>

      <div className="col-span-4 mb-32">
        <label className="block text-sm font-medium">
          Description
          <span className="text-[#E40000]">*</span>
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border px-3 py-2 text-xs"
          rows={4}
          required
          value={estateDetails.description}
          onChange={(e) =>
            setEstateDetails({ ...estateDetails, description: e.target.value })
          }
        ></textarea>
      </div>
    </form>
  );
}
