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

// POST
export interface CreateEstateTypes {
  name: string;
  cityId: string;
  address: string;
  videoUrl: string;
  ownerType: string;
  landmark: string;
  description: string;
  completionStatus: string;
  completionDate: string;
  completionLevel: number;
  longitude: number;
  latitude: number;
  features: Array<{
    id: string;
    name: string;
    icon: string;
    hasAmpleParkingSpace: boolean;
    hasUniformSecurity: boolean;
    hasCCTVSurveillanceSystem: boolean;
    hasInverter: boolean;
    has24HoursElectricity: boolean;
    hasInternetServices: boolean;
    hasFiberOptics: boolean;
    hasReliableWaterSupply: boolean;
    hasChildernPlayground: boolean;
    hasEquestrainOrPoloCenter: boolean;
    hasTennisCourt: boolean;
    hasGolfCourt: boolean;
    hasLoungeOrBar: boolean;
    hasResturant: boolean;
    hasLakesOrPonds: boolean;
    hasGazebos: boolean;
    hasChildcareFacilities: boolean;
    hasSchool: boolean;
    hasHospital: boolean;
    hasShoppingComplex: boolean;
    hasChurchOrMosque: boolean;
    hasGreeneryAndOpenGardens: boolean;
    hasGym: boolean;
    hasBasketballCourt: boolean;
    hasFootballPitch: boolean;
    hasSwimmingPool: boolean;
    hasClubHouse: boolean;
    hasBank: boolean;
    hasCinema: boolean;
    hasEnsuite: boolean;
    hasPoPCeiling: boolean;
    hasWalkInClosets: boolean;
    hasAirConditioning: boolean;
    hasSpeedInternet: boolean;
    hasWineCeller: boolean;
    hasFurnished: boolean;
    hasWifi: boolean;
    hasFibreOptics: boolean;
    hasSatelliteTV: boolean;
    hasElevator: boolean;
    hasBoysQuarters: boolean;
    hasSmartHomeTechnology: boolean;
    hasFullyEquippedKitcken: boolean;
    hasModernAppliances: boolean;
    hasGraniteCountertops: boolean;
    hasBreakfastBar: boolean;
    hasStorageRoom: boolean;
    hasUpgradedBathroomFeatures: boolean;
    hasSpaLikeFeatures: boolean;
    hasTileOrMarbleFeatures: boolean;
    hasOpenFloorPlan: boolean;
    hasLargeWindwos: boolean;
    hasBuiltInHouseTheater: boolean;
    hasPrivateBackyard: boolean;
    hasPatioOrDarkSpace: boolean;
    hasLandscapedGarden: boolean;
    hasHomeOfficeSpace: boolean;
    hasBuiltInShelfOrBookSpace: boolean;
    hasAmpleNaturalLight: boolean;
    hasSecuritySystem: boolean;
    hasBulletProofDoors: boolean;
    hasGatedCompound: boolean;
    hasReinforcedDoorsAndWindows: boolean;
    hasGaurdedCommunity: boolean;
    hasUniformedSecurity: boolean;
    hasParkingGarage: boolean;
    hasDriveWaySpace: boolean;
    hasStreetParkingAvaliability: boolean;
    hasPrivateParkingSpace: boolean;
    hasElectricity: boolean;
    hasBackupGenerator: boolean;
    hasBorehole: boolean;
    hasWaterBoard: boolean;
    hasProximityToSchools: boolean;
    hasProximityToShoppingMalls: boolean;
    hasProximityToSupermarkets: boolean;
    hasNearByPublicTransportation: boolean;
    hasAccessiblityViaBoltOrUber: boolean;
    hasFencedBackyard: boolean;
    hasPetFriendlyNeighbourhood: boolean;
    hasNearbyWalkingTrailsAndSidewalks: boolean;
  }>;
  landSize: number;
  organizationId: string;
  floors: number;
}

export interface CreateImagesTypes {
  base64: string;
  ownerId: string;
  optionId: string;
  type: string;
  extension: string;
  description: string;
  name: string;
  extraProperties: string | null;
  revisionId: string | null;
}
