/*

TODO Herança

- Animal, que vai concentrar o que é comum a ambos os animais
- Objeto cachorro
- Objeto pássaro

*/

class Cachorro {
  public _cor: string;
  public _tamanho: number;
  public _orelhas: string;

  constructor() {
    this._cor = 'Sal e pimenta';
    this._tamanho = 30;
    this._orelhas = 'Grandes e caídas';
  }

  correr() {
    console.log('Correr')
  }

  dormir() {
    console.log('Dormir')
  }

  rosnar() {
    console.log('Rosnar')
  }
}

class Passaro {
  public _cor: string;
  public _tamanho: number;
  public _bico: string;

  constructor() {
    this._cor = 'Azul';
    this._tamanho = 2;
    this._bico = 'Curto';
  }

  voar() {
    console.log('Voar')
  }

  dormir() {
    console.log('Dormir')
  }
}

let cachorro = new Cachorro();
let passaro = new Passaro();

console.log(cachorro);
console.log(passaro);