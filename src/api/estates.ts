import { CreateEstateTypes, CreateImagesTypes } from "@/models/estate";
import { api, getToken } from "./auth";

export const createEstate = async (estateData: CreateEstateTypes) => {
  try {
    const response = await api.post("/developer/estate/create", estateData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);

    // toast.error(error?.response?.data.message);

    throw new Error("There was an error creating the Estate");
  }
};

export const createEstateImage = async (
  estateId: string,
  imageData: CreateImagesTypes
) => {
  try {
    const response = await api.post(
      `/developer/estate/${estateId}/upload-document`,
      imageData,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);

    throw new Error("There was an error uploading the estate image");
  }
};


export const getAllEstates = async (
  pageNumber: number,
  searchTerm?: string
) => {
  try {
    const searchQuery = searchTerm ? `&search=${searchTerm}` : "";
    const response = await api.get(
      `/developer/estate/get-all?pageSize=4&pageNumber=${pageNumber}${searchQuery}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );

    return response.data.value;
  } catch (error) {
    console.log(error);

    // toast.error(error?.response?.data.message);

    throw new Error("There was an error fetching Estates");
  }
};

export const getEstateById = async (estateId: string) => {
  try {
    const response = await api.get(`/developer/estate/${estateId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    return response.data.value;
  } catch (error) {
    console.log(error);

    // toast.error(error?.response?.data.message);

    throw new Error("There was an error fetching Estate details");
  }
};

export const getCountries = async (
  pageNumber: number,
  pageSize: number,
  searchTerm?: string
) => {
  try {
    const searchQuery = searchTerm ? `&search=${searchTerm}` : "";
    const response = await api.get(
      `/public/country/get-all?pageSize=${pageSize}&pageNumber=${pageNumber}${searchQuery}`
    );

    return response.data.value;
  } catch (error) {
    console.log(error);
    throw new Error("There was an error fetching Countries");
  }
};

export const getStates = async (
  countryId: string,
  pageNumber: number,
  pageSize: number,
  searchTerm?: string
) => {
  try {
    const searchQuery = searchTerm ? `&search=${searchTerm}` : "";
    const response = await api.get(
      `/public/state/${countryId}/get-all?pageSize=${pageSize}&pageNumber=${pageNumber}${searchQuery}`
    );

    return response.data.value;
  } catch (error) {
    console.log(error);
    throw new Error("There was an error fetching States");
  }
};

export const getCities = async (
  stateId: string,
  pageNumber: number,
  pageSize: number,
  searchTerm?: string
) => {
  try {
    const searchQuery = searchTerm ? `&search=${searchTerm}` : "";
    const response = await api.get(
      `/public/city/${stateId}/get-all?pageSize=${pageSize}&pageNumber=${pageNumber}${searchQuery}`
    );

    return response.data.value;
  } catch (error) {
    console.log(error);
    throw new Error("There was an error fetching Cities");
  }
};
