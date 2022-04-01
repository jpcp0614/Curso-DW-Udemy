/*

TODO Super() -> é um operador


*/

class Animal {
  public _cor: string;
  public _tamanho: number;
  public _peso: number;

  constructor(cor: string, tamanho: number, peso: number) {
    this._cor = cor;
    this._tamanho = tamanho;
    this._peso = peso;
  }

  dormir() {
    console.log('Dormir');
  }
}

class Passaro extends Animal {
  public _bico: string;

  constructor(bico: string, cor: string, tamanho: number, peso: number) {
    super(cor, tamanho, peso); // super recebe 'Verde', 25, 350, que é passado para o construtor da classe pai
    this._bico = bico;
  }

  voar() {
    console.log('Voar')
  }
}

class Papagaio extends Passaro {
  public _sabeFalar: boolean;

  constructor(sabeFalar: boolean, cor: string, tamanho: number, peso: number) {
    super('Médio', cor, tamanho, peso); // super recebe 'Médio', que é passado no parâmetro da classe superior (passaro)
    this._sabeFalar = sabeFalar;
  }

  falar() {
    console.log('Falar')
  }
}

let papagaio = new Papagaio(true, 'Verde', 25, 350);
console.log(papagaio);

let papagaio2 = new Papagaio(false, 'Verde e Amarelo', 22, 300);
console.log(papagaio2);