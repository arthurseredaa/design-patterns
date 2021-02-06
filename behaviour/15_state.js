/*

*/

class Light {
  constructor(light) {
    this.light = light;
  }
}

class Red extends Light{
  constructor() {
    super('red')
  }

  sign() {
    return 'STOP!'
  }
}

class Yellow extends Light{
  constructor() {
    super('yellow')
  }

  sign() {
    return 'WAIT!'
  }
}

class Green extends Light{
  constructor() {
    super('green')
  }

  sign() {
    return 'GO!'
  }
}

class TraficLight {
  constructor() {
    this.states = [
      new Red(),
      new Yellow(),
      new Green()
    ]
    this.currentColor = this.states[0];
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex(light => light === this.currentColor);

    if(index + 1 < total) {
      this.currentColor = this.states[index + 1]
    } else {
      this.currentColor = this.states[0]
    }
  }

  sign() {
    return this.currentColor.sign()
  }
}

const trafic = new TraficLight();

console.log(trafic.sign());
trafic.change()
console.log(trafic.sign());
trafic.change()
console.log(trafic.sign());
