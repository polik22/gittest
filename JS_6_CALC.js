let calculator = {
    numOne: 0,
    numTwo: 0,
    read () {
        this.numOne = 7; //prompt ("Введите число", 7);
        this.numTwo = 5; //prompt ("Введите число", 5);
    },
    sum () {
        let summa = this.numOne + this.numTwo;
        return summa;
    },
    mul () {
        return this.numOne * this.numTwo;
    }
};
  
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );