
// TODO Melhor fazer classe

let Carro = function() {
  this.cor = 'Preto';
  this.modelo = 'Chevette'
  this.velocidadeAtual = 0;
  this.velocidadeMaxima = 180;

  this.acelerar = function() {
    this.velocidadeAtual += 10;
  }

  this.getVelocidadeAtual = function() {
    return this.velocidadeAtual;
  }

  this.setVelocidadeAtual = function(velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  }
}

let carro = new Carro();