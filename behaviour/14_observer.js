/* Є об'єкт, в якого ми можемо затрігерити виклик якихось змін,
  а  далі, всі об'єкти, які підписані на ці зміни получають
  ці оновлення і роблять свій функціонал */

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsibscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    });
  }
}

class Observer {
  constructor(initialValue = 0) {
    this.state = initialValue;
    this.initialState = initialValue;
  }

  update(action) {
    console.log(action);
    switch(action.type) {
      case "INCREMENT":
        this.state += 1;
        break;
      case "DECREMENT":
        this.state -= 1;
        break;
      case "ADD":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(10);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({type: "INCREMENT"})
stream$.fire({type: "INCREMENT"})
stream$.fire({type: "DECREMENT"})
stream$.fire({type: "ADD", payload: 10})

console.log(obs1.state);
console.log(obs2.state);
// console.log(obs2.state);













