interface Database {
    save(data: string): void;
}

class MySQLDatabase implements Database {
    save(data: string): void {
        console.log(
            "Executing SQL Query: INSERT INTO users VALUES('" + data + "')"
        );
    }
}

class MongoDBDatabase implements Database {
    save(data: string): void {
        console.log(
            "Executing MongoDB Function: db.users.insert({ name: '" + data + "' })"
        );
    }
}

class UserService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    storeUser(user: string): void {
        this.database.save(user);
    }
}

const mysqlDb = new MySQLDatabase();
const mongoDb = new MongoDBDatabase();

const service1 = new UserService(mysqlDb);
service1.storeUser("User 1");

const service2 = new UserService(mongoDb);
service2.storeUser("User 2");
