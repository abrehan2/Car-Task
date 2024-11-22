export type VehicleData = {
  id: string;
  color: string;
  fuelType: string;
  manufacturer: string;
  model: string;
  type: string;
  vehicle: string;
  vehicleIdentificationNumber: string;
  vehicleRegistrationNumber: string;
};

export type CardProps = {
  car: VehicleData;
};
