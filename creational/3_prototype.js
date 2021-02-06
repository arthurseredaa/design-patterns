const car = {
    wheels: 4,
    init: function() {
        return console.log(`${this.wheels}, ${this.owner}`)
    }
}

const audi = Object.create(car, {
    owner: {
        value: "Arthur"
    }
})

console.log(audi.__proto__ === car);

audi.init()