import IVehicleMotorcycle from "./IVehicleCar";

export default class MotorcycleISP implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    throw new Error("Method not implemented.");
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(
      `Criando uma moto: ${color}, ${year}, ${engine} de cilindradas`
    );
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Ligando os motores");
  }
}
