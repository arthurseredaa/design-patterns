// Дозволяє інтегрувати старий інтерфейс класу в новий, не ломаючи його
// Дозволяють переписувати старі інтерфейси, щоб користуватися новий функціоналом і не ломати код, де використовується старий функціонал

class OldCalc {
    operations(a, b, operation) {
        switch(operation) {
            case "add": return a + b
            case "sub": return a - b
            default: return NaN
        }
    }
}

class NewCalc {
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a + b
    }
}

class Adapter {
    construstor() {
        this.calc = new NewCalc()
    }

    show = () => console.log(this.calc)

    operations(a, b, operation) {
        switch(operation) {
            case "add": return this.state.calc.add(a, b);
            case "sub": return this.state.calc.sub(a, b);
            default: return NaN
        }
    }
}

const calcAdapter = new Adapter();

console.log(calcAdapter.show())
console.log(calcAdapter.operations(1, 2, "add"))