import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();

cliente.create({ name: "Arty", email: "contato@artficer.com" });

const notificaocao = new Notify(cliente);

notificaocao.sendEmail();