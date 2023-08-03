//Correto
interface IClient{
    email: string,
    name: string
}

export default class Client{
    private email: string
    private name: string

    create({email, name}:IClient) {
        this.name = name
        this.email = email
    }

    read() {
        return {name: this.name, email: this.email}
    }

    update() {
        
    }

    delete() {
        
    }

}

//Errado:
// export default class Client {
//     email: string;

//     create() {

//     }
//     read() {

//     }
//     update() {

//     }
//     delete() {

//     }

//     sendEmail() {
        
//     }

// }
//No modelo errado atribuímos a classe "Client" uma função fora do "CRUD" que é o que ela é responsável por resolver.
//Se fosse necessário fazer alguma alteração no serviço de envio de email, outra pessoa teria que "advinhar" que ele estava
//dentro dessa classe e a classe como um todo sentiria o peso das alterações. 