abstract class Account {
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
    private balance: number;

    constructor() {
        super();
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Savings deposit:", amount);
    }

    withdraw(amount: number): void {
        this.balance = this.balance - amount;
        console.log("Savings withdraw:", amount);
    }
}

class CurrentAccount extends Account {
    private balance: number;

    constructor() {
        super();
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Current deposit:", amount);
    }

    withdraw(amount: number): void {
        this.balance = this.balance - amount;
        console.log("Current withdraw:", amount);
    }
}

class FixedDepositAccount extends Account {
    private balance: number;

    constructor() {
        super();
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("FD deposit:", amount);
    }

    withdraw(amount: number): void {
        throw new Error("Withdrawal not allowed in Fixed Deposit Account");
    }
}

class BankClient {
    private accounts: Account[];

    constructor(accounts: Account[]) {
        this.accounts = accounts;
    }

    processTransactions(): void {
        for (const account of this.accounts) {
            account.deposit(20000);

            // type checking, bad design
            if (account instanceof FixedDepositAccount) {
                console.log("Withdrawal not allowed in Fixed Deposit Account");
            } else {
                try {
                    account.withdraw(100);
                } 
                catch (error) {
                    console.log((error as Error).message);
                }
            }
        }
    }
}

const accounts: Account[] = [];

accounts.push(new SavingsAccount());
accounts.push(new CurrentAccount());
accounts.push(new FixedDepositAccount());

const bankClient = new BankClient(accounts);
bankClient.processTransactions();
