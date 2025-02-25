import { api, getToken } from "./auth";

export const getAllEstates = async (
  pageNumber: number,
  searchTerm?: string
) => {
  try {
    const response = await api.get(
      `/developer/estate/get-all?pageSize=4&pageNumber=${pageNumber}&search=${searchTerm}`,
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
