#include <iostream>
using namespace std;

// Low-level module for MySQL
class MySQLDatabase {  
public:
    // Save data to SQL
    void save_to_sql(string data) {
        cout << "Executing SQL Query: INSERT INTO users VALUES('" << data << "');" << endl;
    }
};

// Low-level module for MongoDB
class MongoDBDatabase {  
public:
    // Save data to MongoDB
    void save_to_mongo(string data) {
        cout << "Executing MongoDB Function: db.users.insert({name: '" << data << "'})" << endl;
    }
};

// High-level module, it is tightly coupled
class UserService {  
private:
    // Direct dependency on MySQL
    MySQLDatabase sql_db;  

    // Direct dependency on MongoDB
    MongoDBDatabase mongo_db;  

public:
    void store_user_to_sql(string user) {
        sql_db.save_to_sql(user);  
    }

    void store_user_to_mongo(string user) {
        mongo_db.save_to_mongo(user);  
    }
};

int main() {
    UserService service;

    service.store_user_to_sql("User 1");
    service.store_user_to_mongo("User 2");
}
