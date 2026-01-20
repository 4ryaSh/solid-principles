#include <iostream>
#include <vector>

using namespace std;

class NonWithdrawableAccount {
public:
    virtual void deposit(int amount) = 0;    
};

class WithdrawableAccount : public NonWithdrawableAccount {
public:
    virtual void withdraw(int amount) = 0;
};

class SavingsAccount : public WithdrawableAccount {
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

class CurrentAccount : public WithdrawableAccount {
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

class FixedDepositAccount : public NonWithdrawableAccount {
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
};

class BankClient {
private:
    vector<NonWithdrawableAccount*> non_withrawable_accounts;
    vector<WithdrawableAccount*> withrawable_accounts;
    
public:
    BankClient(vector<NonWithdrawableAccount*> non_withrawable_accounts, vector<WithdrawableAccount*> withrawable_accounts) {
        this->non_withrawable_accounts = non_withrawable_accounts;
        this->withrawable_accounts = withrawable_accounts;
    }

    void process_transactions() {
        for (WithdrawableAccount* withrawable_account: withrawable_accounts) {
            // all accounts allow deposit and withdraw functionality
            withrawable_account->deposit(20000);
            withrawable_account->withdraw(100);
        }
        for (NonWithdrawableAccount* non_withrawable_account: non_withrawable_accounts) {
            // only deposit functionality is present here
            non_withrawable_account->deposit(90000);
        }
    }
};

int main() {
    vector<NonWithdrawableAccount*> non_withrawable_accounts;
    vector<WithdrawableAccount*> withrawable_accounts;
    SavingsAccount* sa = new SavingsAccount();
    CurrentAccount* ca = new CurrentAccount();
    FixedDepositAccount* fa = new FixedDepositAccount();

    non_withrawable_accounts.push_back(fa);
    withrawable_accounts.push_back(sa);
    withrawable_accounts.push_back(ca);

    BankClient* bank_client = new BankClient(non_withrawable_accounts, withrawable_accounts);
    // throws exceptions for FixedDepositAccout withdrawal
    bank_client->process_transactions();

    delete sa;
    delete ca;
    delete fa;
    delete bank_client;

    return 0;
};