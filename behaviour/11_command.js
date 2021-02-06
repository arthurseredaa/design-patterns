// Приклад: редакс
/* Є деякий клас, який має в собі певний набор функціоналу, цей паттерн
    дозволяє створити деяку абстрактну оболонку над функціоналом, який дозволяє керувати,
    але вже через інший об'єкт.
*/

class MyMath {
    constructor(initialValue = 0) {
        this.num = initialValue
    }

    add(n) {
        return this.num += n;
    }

    sub(n) {
        return this.num -= n;
    }

    mult(n) {
        return this.num *= n
    }

    divid(n) {
        return this.num /= n
    }
}

//  Клас, який втілює паттерн
class Command {
    constructor(target) {
        this.target = target;
    }

    execute(command, args) {
        console.log(args)
        return this.target[command](args);
    }
}

const x = new Command(new MyMath(5)) // initial value = 5

console.log(x.execute('add', 5)) // 5 + 5
console.log(x.execute('mult', 10)) // 10 * 10
console.log(x.execute('sub', 10)) // 100 - 10
console.log(x.execute('divid', 3)) // 90 / 3