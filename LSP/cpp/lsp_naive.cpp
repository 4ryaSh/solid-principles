#include <iostream>
#include <vector>

using namespace std;

class Account {
public:
    virtual void deposit(int amount) = 0;
    virtual void withdraw(int amount) = 0;
};

class SavingsAccount : public Account {
private:
    int balance;

public:
    SavingsAccount() {
        balance = 0;
    }

    void deposit(int amount) {
        balance = balance + amount;
        cout << "Deposited: " << amount << " in Savings Account. New Balance: " << balance << endl;
    }

    void withdraw(int amount) {
        if (balance >= amount) {
            balance = balance - amount;
            cout << "Withdrawn: " << amount << " from Savings Account. New Balance: " << balance << endl;
        } else {
            cout << "Insufficient funds in Savings Account!" << endl;
        }
    }
};

class CurrentAccount : public Account {
private:
    int balance;

public:
    CurrentAccount() {
        balance = 0;
    }

    void deposit(int amount) {
        balance = balance + amount;
        cout << "Deposited: " << amount << " in Current Account. New Balance: " << balance << endl;
    }

    void withdraw(int amount) {
        if (balance >= amount) {
            balance = balance - amount;
            cout << "Withdrawn: " << amount << " from Current Account. New Balance: " << balance << endl;
        } else {
            cout << "Insufficient funds in Current Account!" << endl;
        }
    }
};

class FixedDepositAccount : public Account {
private:
    int balance;

public:
    FixedDepositAccount() { 
        balance = 0; 
    }

    void deposit(int amount) {
        balance = balance + amount;
        cout << "Deposited: " << amount << " in Fixed Deposit Account. New Balance: " << balance << endl;
    }

    void withdraw(int amount) {
        throw logic_error("Withdrawal not allowed in Fixed Deposit Account!");
    }
};

class BankClient {
private:
    vector<Account*> accounts;
    
public:
    BankClient(vector<Account*> accounts) {
        this->accounts = accounts;
    }

    void process_transactions() {
        for (Account* account: accounts) {
            // all accounts allow deposit functionality
            account->deposit(20000);

            // checking the account type,if FixedDepositAccount, skip withdrawal
            if (typeid(*account) == typeid(FixedDepositAccount)) {
                cout << "Withdrawal not allowed in Fixed Deposit Account!" << endl;
            }
            else {
                try {
                    account->withdraw(100);
                }
                catch (const logic_error& e) {
                    cout << "Exception: " << e.what() << endl;
                }
            }
        }
    }
};

int main() {
    vector<Account*> accounts;
    SavingsAccount* sa = new SavingsAccount();
    CurrentAccount* ca = new CurrentAccount();
    FixedDepositAccount* fa = new FixedDepositAccount();

    accounts.push_back(sa);
    accounts.push_back(ca);
    accounts.push_back(fa);

    // now bank client is tightly coupled, this is not a good design
    BankClient* bank_client = new BankClient(accounts);
    // throws exceptions for FixedDepositAccout withdrawal
    bank_client->process_transactions();

    delete sa;
    delete ca;
    delete fa;
    delete bank_client;

    return 0;
};