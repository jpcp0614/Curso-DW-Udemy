class calculator {

  public _a: number;
  public _b: number;

  constructor(a: number, b: number) {

    this._a = a;
    this._b = b;
  }

  public sum(): number {
    return this._a + this._b;
  }

  public sub(): number {
    return this._a - this._b;
  }

  public div(): number | string {
    if (this._a == 0) {
      return this._a / this._b
    } else if(this._b == 0) {
      return `Tende a infinito ∞`
    }
    return this._a / this._b
  }

  public mult(): number {
    return this._a * this._b;
  }

}

const calcSum = new calculator(0,1).sum();
console.log(calcSum);

const calcSub = new calculator(0,5).sub();
console.log(calcSub);

const calcDiv = new calculator(1,0).div();
console.log(calcDiv);

const calcMult = new calculator(5,9).mult();
console.log(calcMult);