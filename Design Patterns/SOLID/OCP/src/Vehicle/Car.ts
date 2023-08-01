import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
    constructor(color: string, year: number, engine: number, seats: number, doors: number) {
        this.configure(color, year, engine, seats, doors);
    }

    startVehicle(): void {
        console.log('Ligando os motores');
    }
    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`Criando um carro: ${color}, ${year}, ${engine} de potência, ${doors} portas, com ${seats} assentos`);
        this.startVehicle();
    }
}