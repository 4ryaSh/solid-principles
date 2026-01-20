class MySQLDatabase {
    saveToSql(data: string): void {
        console.log(
            "Executing SQL Query: INSERT INTO users VALUES('" + data + "')"
        );
    }
}

class MongoDBDatabase {
    saveToMongo(data: string): void {
        console.log(
            "Executing MongoDB Function: db.users.insert({ name: '" + data + "' })"
        );
    }
}

class UserService {
    private sqlDb: MySQLDatabase;
    private mongoDb: MongoDBDatabase;

    constructor() {
        this.sqlDb = new MySQLDatabase();
        this.mongoDb = new MongoDBDatabase();
    }

    storeUserToSql(user: string): void {
        this.sqlDb.saveToSql(user);
    }

    storeUserToMongo(user: string): void {
        this.mongoDb.saveToMongo(user);
    }
}

const service = new UserService();

service.storeUserToSql("User 1");
service.storeUserToMongo("User 2");
