/*

TODO Objetos Literais/Estáticos

- Objeto literal é um objeto descritivo, com a combinação de chave: valor

*/

class Product {
  public _description: string;
  public _price: number;

  constructor(description: string, price: number) {
    this._description = description;
    this._price = price;
  }

  public getDescription(): void {
    console.log(`${this._description} - por apenas R$${this._price.toFixed(2)}`);
  }
}

let product = new Product('Notebook', 5000);
product.getDescription();


//* Os objetos literais são utilizados pq, nem sempre é necessário criar uma classe para criar um objeto
//* Geralmente são objetos únicos dentro da aplicação, sem a necessidade de criar uma coleção com um modelo específico
let productLiteral = {
  description: 'Geladeira',
  price: 3500,
  getDescription: function() {
    //* esse this é devido ao contexto do objeto
    console.log(`${this.description} - por apenas R$${this.price.toFixed(2)}`);
  }
}

productLiteral.getDescription();