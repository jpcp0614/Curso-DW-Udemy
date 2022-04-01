interface IPessoa {
  nome: string;
  idade: number;
  sexo?: string;
}

let pessoa: IPessoa = {
  nome: 'Maria',
  idade: 38,
}

console.log('Antes: ', pessoa);

pessoa.sexo = 'Feminino';

console.log('Depois: ', pessoa);

