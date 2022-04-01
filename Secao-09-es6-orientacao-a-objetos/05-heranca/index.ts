/*

TODO Herança

- Animal, que vai concentrar o que é comum a ambos os animais
- Objeto cachorro
- Objeto pássaro

-> class SUPER
-> class SUB

Na class SUB, dentro do constructor, será preciso utilizar, antes dos this. o super();

*/

class Animal {
  public _cor: string;
  public _tamanho: number | null;

  constructor() {
    this._cor = '';
    this._tamanho = null;
  }

  dormir() {
    console.log('Dormir');
  }
}

class Cachorro extends Animal {
  public _orelhas: string;

  constructor() {
    super();
    this._orelhas = 'Grandes e caídas';
  }

  correr() {
    console.log('Correr')
  }

  rosnar() {
    console.log('Rosnar')
  }
}

class Passaro extends Animal {
  public _bico: string;

  constructor() {
    super();
    this._bico = 'Curto';
  }

  voar() {
    console.log('Voar')
  }
}

class Papagaio extends Passaro {
  public _sabeFalar: boolean;

  constructor() {
    super();
    this._sabeFalar = true;
  }

  falar() {
    console.log('Falar')
  }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

cachorro.dormir();
papagaio.voar();