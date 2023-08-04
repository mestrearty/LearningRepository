import Car from './vehicles Sem ISP/Car';
import Motorcycle from "./vehicles Sem ISP/Motorcycle";
import  CarISP  from "./vechicles Com ISP/Car"
import  MothorcycleISP from "./vechicles Com ISP/Motorcycle"

//Utilizando o método sem ISP
let carro = new Car("Azul", 2019, 200, 5);
carro.startVehicle()

let moto = new Motorcycle("Vermeia ", 2019, 150);
moto.startVehicle()


//Utilizando o método sem ISP
carro = new CarISP("Azul", 2019, 200, 5);
carro.startVehicle()

moto = new MothorcycleISP("Vermeia ", 2019, 150);
moto.startVehicle()

//O nome CarISP é apanas para diferenciar as classes. Não é obrigatório o uso do sufixo ISP