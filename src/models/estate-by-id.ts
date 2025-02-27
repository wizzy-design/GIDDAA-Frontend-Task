/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EstateByIdResponse {
  value: {
    statusCode: number;
    message: string;
    value: EstateDetails;
  };
  formatters: any[];
  contentTypes: any[];
  declaredType: any | null;
  statusCode: number;
}

export interface EstateDetails {
  name: string;
  city: City;
  address: string;
  landmark: string;
  longitude: number;
  videoUrl: string;
  landSize: number;
  ownerType: string;
  latitude: number;
  description: string;
  completionStatus: string;
  completionDate: string;
  completionLevel: number;
  features: any[];
  feature: any | null;
  images: Image[];
  houses: any[];
  houseStats: HouseStats | null;
  organizationId: string;
  floors: number;
  organization: Organization;
  id: string;
  createdBy: CreatedBy;
  dateCreated: string;
  dateLastModified: string | null;
  lastModifiedBy: string | null;
}

export interface CreatedBy {
  Id: string;
  Name: string;
  RegistrationType: string;
  Action: string;
}

export interface Organization {
  id: string;
  name: string;
  address: string;
  coverImage: string;
  logo: string;
  houseCount: number;
  estateCount: number;
  yearsInOperation: number;
  documentCount: number;
  partnerCount: number;
}

export interface HouseStats {
  // Define the properties of HouseStats if available
}

export interface Image {
  // Define the properties of Image if available
}

export interface City {
  id: string;
  name: string;
  stateId: string;
  dateCreated: string;
  state: string | null;
  popularLandMark: string | null;
  popularLandMarkLongitude: number;
  popularLandMarkLatitude: number;
  extraProperty: any | null;
}
