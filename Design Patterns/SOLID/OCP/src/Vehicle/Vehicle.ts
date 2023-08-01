export default class Vehicle {

    constructor(
        private color: string,
        private year: number,
        private engine: number,
        private seats: number,
        private doors: number
    ) {

    }

    car(): void {
        console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine} de potência, ${this.doors} portas, com ${this.seats} assentos`);
        this.startVehicle();
    }

    motorcycle(): void {
        console.log(`Criando uma moto: ${this.color}, ${this.year}, ${this.engine} de cilindradas`);
        this.startVehicle();
    }

    startVehicle(): void {
        console.log('Ligando os motores');
    }
}