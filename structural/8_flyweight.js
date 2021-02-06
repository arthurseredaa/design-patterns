// Дозволяє ефективно передавати і працювати з даними через різні типи об'єктів
// Приклад: загрузка зображень в браузері, для того, щоб недопустити повторне завантаження тих елементів, що вжже були завантажені
// Кешування, збереження пам'яті

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }

    setCar(car) {
        return this.cars.push(car)
    }

    create = (model, price) => {
        const candidate = this.getCar(model)
        if(candidate) {
            return candidate
        }
        const newCar = new Car(model, price);
        this.setCar(newCar);
        return newCar;
    }
}

const factory = new CarFactory();

const audi = factory.create("A6", 5000);
console.log(audi)
const audiNew = factory.create("A6", 12000)
console.log(audiNew)

console.log(audi === audiNew)