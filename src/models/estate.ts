/* eslint-disable @typescript-eslint/no-explicit-any */

export interface AllEstateResponse {
  value: {
    statusCode: number;
    message: string;
    value: {
      pageNumber: number;
      pageSize: number;
      totalPages: number;
      totalRecords: number;
      data: Estate[];
    };
  };
  formatters: any[];
  contentTypes: any[];
  declaredType: any;
  statusCode: number;
}

export interface Estate {
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
  feature: any;
  images: Image[];
  houses: any[];
  houseStats: HouseStats;
  organizationId: string;
  floors: number;
  organization: Organization;
  id: string;
  createdBy: string;
  dateCreated: string;
  dateLastModified: string | null;
  lastModifiedBy: string | null;
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

export interface Image {
  id: string;
  name: string;
  description: string;
  extension: string;
  document: string;
  type: string;
  extraProperties: any | null;
  optionId: string;
  option: any | null;
}

export interface HouseStats {
  totalHouses: number;
  totalUnits: number;
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
