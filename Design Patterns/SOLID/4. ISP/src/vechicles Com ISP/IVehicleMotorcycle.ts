import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle {
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
