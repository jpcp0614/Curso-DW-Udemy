/*
TODO Encapsulamento

* O que dentro dele estará disponível para o sistema
* Dará visibilidade aos atributos e métodos

* - private, public, readonly

* Podem ser herdados por outros objetos (herança)

*/

//* TV

class TV {
  public _canais: number[];
  public _volume?: number;

  constructor(volume?: number) {

    if(volume === undefined) {
      this._volume = 0;
    } else {
      this._volume = volume;
    }
    this._canais = [4, 5, 7, 10];
  }

  public getCanal(value: number): void {
    if (this._canais.includes(value)) {
      console.log(`Canal ${value} disponível`);
    } else {
      console.log(`Canal ${value} não disponível`);
    }
  }
}

let tv = new TV(7);
tv.getCanal(1);

console.log(tv);