// Abstraction
interface Database {
    void save(String data);
}

// MySQL implementation
class MySQLDatabase implements Database {
    public void save(String data) {
        System.out.println("Executing SQL Query: INSERT INTO users VALUES('" + data + "');");
    }
}

// MongoDB implementation
class MongoDBDatabase implements Database {
    public void save(String data) {
        System.out.println("Executing MongoDB Function: db.users.insert({name: '" + data + "'})");
    }
}

// High-level module loosely coupled
class UserService {
    private Database db;

    public UserService(Database db) {
        this.db = db;
    }

    public void storeUser(String user) {
        db.save(user);
    }
}

public class DIPIntact {
    public static void main(String[] args) {
        MySQLDatabase mysql = new MySQLDatabase();
        MongoDBDatabase mongodb = new MongoDBDatabase();

        UserService service1 = new UserService(mysql);
        service1.storeUser("User 1");

        UserService service2 = new UserService(mongodb);
        service2.storeUser("User 2");
    }
}
