// Створюється клас чи об'єкт, в якого ми поступово можемо отримувати певну інформацію
class Iterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return {value: this.data[this.index++], done: false}
                } else {
                    this.index = 0
                    return {    
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

const iterator = new Iterator(['This', 'is', 'Hello', 'World', 'from', 'iterator', 'class'])

for(const val of iterator) {
  console.log(val)
}


function* generator(data) {
  let index = 0;
  while(index < data.length) {
    yield data[index++]
  }
}

const gen = generator(['This', 'is', 'Hello', 'World', 'from', 'generator'])

// for(const val of gen) {
  // console.log(val)
// }

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)