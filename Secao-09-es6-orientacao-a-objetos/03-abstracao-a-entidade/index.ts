// software de marcenaria (cadeira e sofá)

// TODO Paradigma Procedural (verbosidade)

//* cadeira
let qtdPernas = 4;
let isGiratoria = false;
let cor = 'azul';

//* array de cadeiras
/*
let cadeiras = Array();
cadeiras[0] = Array();
cadeiras[0]['qtdPernas'] = 4;
cadeiras[0]['isGiratoria'] = false;
cadeiras[0]['cor'] = 'azul';

cadeiras[1] = Array();
cadeiras[1]['qtdPernas'] = 4;
cadeiras[1]['isGiratoria'] = true;
cadeiras[1]['cor'] = 'vermelha'; 

function girarCadeira(indice) {
  if (cadeiras[indice]['isGiratoria']) {
    console.log('cadeira giratória');
  } else {
    console.log('cadeira não giratória')
  }
}

function adicionarCadeira(qtdPernas, giratoria, cor) {
  let cadeira = Array();

  cadeira['qtdPernas'] = qtdPernas;
  cadeira['isGiratoria'] = giratoria;
  cadeira['cor'] = cor;

  cadeiras.push(cadeira);
}

girarCadeira(0);

adicionarCadeira(4, true, 'azul');
console.log(cadeiras);

*/

interface ICadeira {
  qtdPernas: number;
  isGira: boolean;
  cor: string;
}

class Cadeira {
  public _qtdPernas: number;
  public _isGira: boolean;
  public _cor: string;

  //* é um método do ciclo de vida do objeto
  //* é chamado quando a classe é instanciada (automático)
  constructor(qtdPernas: number, gira: boolean, cor: string) {
    this._qtdPernas = qtdPernas;
    this._isGira = gira;
    this._cor = cor;
  }

  public girarCadeira(): void {
    if (this._isGira) {
      console.log('cadeira giratória');
    } else {
      console.log('cadeira não giratória')
    }
  }

}

//* Adicionar cadeira não faz parte do objeto
//* É uma instância de um novo objeto, baseado na classe
let cadeira1 = new Cadeira(4, true, 'vermelha');
console.log(cadeira1);