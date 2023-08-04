import IVehicleCar from './IVehicleCar';


export default class CarISP implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Ligando os Motores");
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} de potência, com ${seats} assentos.`
    );
    this.startVehicle();
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    throw new Error("Method not implemented.");
  }
}
