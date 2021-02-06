//  Довзоляє створювати тісну комунікацію між об'єктами різного типу
// Надає централізовану абстракцію, яка дозволяє взаємодіяти групі об'єктів через одне одного

class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`[${from.name} to ${this.name}]: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(user =>  this.users[user] !== from && this.users[user].receive(message, from))
        }
    }
}

const arthur = new User("Arthur");
const vlad = new User("Vlad");
const igor = new User("Igor");

const room = new ChatRoom();

room.register(arthur)
room.register(vlad)
room.register(igor)

arthur.send('hello', igor)
igor.send('hi!', arthur)
vlad.send('Vsem privet!')