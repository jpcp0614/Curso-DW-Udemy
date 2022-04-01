// TODO objeto literal é um objeto único dentro da aplicação

let assinatura = {
  idClient: 1000,
  description: 'Acesso a Internet',
  status() {
    console.log('ativo');
  }
}

// console.log(assinatura.description);

let y = assinatura; // referência de acesso
// console.log(y.description);

y.description = 'Internet + TV + telefone';

console.log(assinatura.description);
console.log(y.description);