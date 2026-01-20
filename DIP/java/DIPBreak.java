// Low-level module for MySQL
class MySQLDatabase {
    public void saveToSQL(String data) {
        System.out.println("Executing SQL Query: INSERT INTO users VALUES('" + data + "');");
    }
}

// Low-level module for MongoDB
class MongoDBDatabase {
    public void saveToMongo(String data) {
        System.out.println("Executing MongoDB Function: db.users.insert({name: '" + data + "'})");
    }
}

// High-level module tightly coupled
class UserService {
    private MySQLDatabase sqlDb = new MySQLDatabase();
    private MongoDBDatabase mongoDb = new MongoDBDatabase();

    public void storeUserToSQL(String user) {
        sqlDb.saveToSQL(user);
    }

    public void storeUserToMongo(String user) {
        mongoDb.saveToMongo(user);
    }
}

public class DIPBreak {
    public static void main(String[] args) {
        UserService service = new UserService();
        service.storeUserToSQL("User 1");
        service.storeUserToMongo("User 2");
    }
}
