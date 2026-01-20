#include <iostream>
using namespace std;

// Abstraction (Interface)
class Database {
public:
    virtual void save(string data) = 0;
};

// MySQL implementation (Low-level module)
class MySQLDatabase : public Database {
public:
    // Save data to SQL
    void save(string data) override {
        cout << "Executing SQL Query: INSERT INTO users VALUES('" << data << "');" << endl;
    }
};

// MongoDB implementation (Low-level module)
class MongoDBDatabase : public Database {
public:
    // Save data to MongoDB
    void save(string data) override {
        cout << "Executing MongoDB Function: db.users.insert({name: '" << data << "'})" << endl;
    }
};

// High-level module, it is now loosely coupled
class UserService {
private:
    Database* db;  

public:
        UserService(Database* database) {  
        db = database;
    }
    
    // Store user in the database
    void store_user(string user) {
        db->save(user);
    }
};

int main() {
    MySQLDatabase mysql;
    MongoDBDatabase mongodb;

    UserService service1(&mysql);
    service1.store_user("User 1");

    UserService service2(&mongodb);
    service2.store_user("User 2");
}
