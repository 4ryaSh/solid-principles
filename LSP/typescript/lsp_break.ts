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
        console.log("Deposited:", amount, "in Savings Account. Balance:", this.balance);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            console.log("Withdrawn:", amount, "from Savings Account. Balance:", this.balance);
        } 
        else {
            console.log("Insufficient funds in Savings Account");
        }
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
        console.log("Deposited:", amount, "in Current Account. Balance:", this.balance);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            console.log("Withdrawn:", amount, "from Current Account. Balance:", this.balance);
        } else {
            console.log("Insufficient funds in Current Account");
        }
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
        console.log("Deposited:", amount, "in Fixed Deposit Account. Balance:", this.balance);
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

            try {
                account.withdraw(100);
            } 
            catch (error) {
                console.log((error as Error).message);
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
