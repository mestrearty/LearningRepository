import TypeVehicle from "./TypeVehicle";
import Car from "./Vehicle/Car";
import Motorcycle from "./Vehicle/Motorcycle";
import Vehicle from "./Vehicle/Vehicle";

let type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
    vehicle = new Vehicle("Rosa", 2023, 2.0, 4, 4);
    vehicle.car();
} else if (type === TypeVehicle.MOTORCYCLE) {
    vehicle = new Vehicle("Vermelha", 2002, 150, 1, 0);
    vehicle.motorcycle;
}

// Apesar de Carro e Moto serem veículos, ambas possuem particularidades e nosso construtor
// está fixo nas particularidades de um Carro, o que é um problema para nós criar a moto. visto que ela não tem portas e só 1 assento.
// Pior seria se fossemos criar uma bike, não acha? Estamos inclusive ferindo o SRP
// Mas vai que alguém já implementou todo um processo em cima da nossa classe e gerando Motocas por ai,
// Se mudássemos o código removendo a moto imagina o que acontece com outras classes e funções que as utilizam
// Por isso o arquivo Vihicle.ts é extendido em VihicleCar.ts e VihicleMotorcycle.ts junto com suas abstrações (interfaces).
type = TypeVehicle.CAR;
if (type === TypeVehicle.CAR) {
    vehicle = new Car("Rosa", 2023, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motorcycle("Vermelha", 2002, 150);
}