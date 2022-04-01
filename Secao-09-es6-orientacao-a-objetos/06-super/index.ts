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

  constructor(bico: string) {
    super('Verde', 25, 350); // super recebe 'Verde', 25, 350, que é passado para o construtor da classe pai
    this._bico = bico;
  }

  voar() {
    console.log('Voar')
  }
}

class Papagaio extends Passaro {
  public _sabeFalar: boolean;

  constructor(sabeFalar: boolean) {
    super('Médio'); // super recebe 'Médio', que é passado no parâmetro da classe superior (passaro)
    this._sabeFalar = sabeFalar;
  }

  falar() {
    console.log('Falar')
  }
}

let papagaio = new Papagaio(true);
console.log(papagaio);