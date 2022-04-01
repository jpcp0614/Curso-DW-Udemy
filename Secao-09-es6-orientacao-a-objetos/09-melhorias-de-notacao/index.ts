let nome = 'John';
let age = 35;
let genre = 'masculino';
let job = 'programador';

let obj = {
  nome,
  age,
  genre,
  job,
  resumo: () => {
    console.log(`${nome}, sexo ${genre}, tem ${age} anos e trabalha como ${job}`);
  }
}

let obj2 = {
  nome,
  age,
  genre,
  job,
  resumo() {
    console.log(`${nome}, sexo ${genre}, tem ${age} anos e trabalha como ${job}`);
  }
}

console.log(obj);
obj2.resumo();
