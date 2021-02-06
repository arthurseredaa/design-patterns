// Поведінкові паттерни покращують комунікацію між об'єктами різного типу

// Можна робити чейнінг методів, як в jquery

class CalcSum {
    constructor(initialValue = 0) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }

    sub(value) {
        this.sum -= value;
        return this;
    }

    mult(value) {
        this.sum *= value;
        return this;
    }

    divid(value) {
        this.sum /= value;
        return this;
    }
}

const sum1 = new CalcSum(); //create instance of CalcSum

sum1.add(2000).sub(500).divid(2).mult(10) //chaining

console.log(sum1.sum)