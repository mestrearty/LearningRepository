import Client from "./Client";

export default class Notify {
    private client: Client;
    private clientName: string;
    private clientEmail: string;

    constructor(client: Client) {
        this.client = client;
        this.clientEmail = this.client.read().email;
        this.clientName = this.client.read().name;

        console.log(`Classe Notify instanciada e carregada com o Cliente ${this.clientName}`);
    }

    sendEmail(): boolean {
        console.log(`Email enviado para o ${this.clientName} no E-mail:${this.clientEmail}`);
        return true;
    }
}

//Nesse caso veja que email recebe um cliente e trabalha com as informações que precisa de cliente 
//para realizar o envio do email.