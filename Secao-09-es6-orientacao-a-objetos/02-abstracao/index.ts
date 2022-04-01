/*

TODO - Paradigma de Orientação a Objetos

* - Abstração: habilidade intuitiva
* Compreender as coisas do mundo real

* a) Entidade (Carro): compreensão do objeto do mundo real deve ser passado para dentro da aplicação
* b) Identidade (new Carro()): poderemos instanciar um objeto do mundo real (acessar a entidade, referenciar de forma única cada objeto)
* c) Características (marca, preço, cor): atributos (características para as regras de negócio)
* d) Ações (ligar, acelerar, desligar): métodos

*/

//* modelo objeto (objeto é a instância do modelo)
class ContaBancaria { 
  //* atributos
  private agencia?: number = 2205;
  private numeroConta?: number = 26718;
  private saldo?: number = 50;
  private limite?: number = 450;

  //* na instância, ocorre o processo de construção do objeto, que possui instruções, com base num modelo
  //* é um método automático
  constructo(agencia?: number, numeroConta?: number, saldo?: number, limite?: number) { 
    //* operador this faz com que um atributo seja conectado ao contexto de um objeto (encapsulamento)
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.limite = limite;
  }

  //* identificar as Ações (métodos)
  public depositar(valorDeposito: number) {
    this.saldo += valorDeposito;
  }

  public sacar(valorSaque: number) {
    this.saldo -= valorSaque;
  }

  public consultarSaldo() {
    return this.saldo;
  }

  public consultarAgencia() {
    return this.agencia;
  }

  public consultarNumeroConta() {
    return this.numeroConta;
  }

  public consultarLimite() {
    return this.limite;
  }
}

//* Identidade
let x = new ContaBancaria();
let y = new ContaBancaria(); //* como não tem nenhuma alteração aqui, o objeto y continua como um 'default'

//* a partir do objeto criado, posso acessar um método ou um atributo específico (quando public)
console.log(x.consultarSaldo());
x.depositar(100);
console.log(x.consultarSaldo());