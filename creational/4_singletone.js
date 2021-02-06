// В програмі існує клас в якого може бути лише 1 інстенс
// Часто використовуєтсья в БД

class Database {
    constructor(data) {
        if(Database.exists) {
            return Database.instance
        }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData = () => console.log(this.data)
}

const mongo = new Database('mongo');

mongo.getData();

const mysql = new Database('mysql');

mysql.getData()