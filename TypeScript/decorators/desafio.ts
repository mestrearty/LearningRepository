namespace DesafioDecorator {
    type Construtor = new (...args: any[]) => {}

    // Desafio Decorator perfilAdmin
    const usuarioLogado = {
        nome: 'Guilherme Filho',
        email: 'guigui@gmail.com',
        admin: true
    }

    @perfilAdmin
    class MudancaAdministrativa {
        critico() {
            console.log('Algo crítico foi alterado!')
        }
    }

    new MudancaAdministrativa().critico()

    function perfilAdmin<T extends Construtor>(construtor: T) {
        return class extends construtor {
            constructor(...args: any[]) {
                super(...args) 
                if (!usuarioLogado || !usuarioLogado.admin) {
                    throw new Error(`Sem permissão`)
                }
            }
        }
    }

}