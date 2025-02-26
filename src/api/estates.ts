import { api, getToken } from "./auth";

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
