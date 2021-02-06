// Служить для того щоб створювати публічний інтерфейс, щоб спростити певні дії

class Complains {
    constructor() {
        this.complains = [];
    }

    reply = (complaint) => {}

    add = (complaint) => {
        this.complains.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplains extends Complains {

    reply = ({id, customer, details}) => {
        return `(Product: ${id}) ${customer}: ${details}`
    } 
}

class ServiceComplains extends Complains {

    reply = ({id, customer, details}) => {
        return `(Service: ${id}) ${customer}: ${details} `
    } 
}

// ФАСАД
class ComplainRegister {
    register = (customer, type, details) => {
        const id = Date.now();

        let complaint = type === "Service" ? new ServiceComplains() : new ProductComplains();

        return complaint.add({id, customer, details})
    }
}

const register = new ComplainRegister();

console.log(register.register("Arthur Sereda", "Service", "Fuck"))
console.log(register.register("Hrustya Mamchur", "Product", "Shit"));