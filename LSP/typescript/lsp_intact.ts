interface NonWithdrawableAccount {
    deposit(amount: number): void;
}

interface WithdrawableAccount extends NonWithdrawableAccount {
    withdraw(amount: number): void;
}

class SavingsAccount implements WithdrawableAccount {
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Deposited:", amount, "Savings balance:", this.balance);
    }

    withdraw(amount: number): void {
        this.balance = this.balance - amount;
        console.log("Withdrawn:", amount, "Savings balance:", this.balance);
    }
}

class FixedDepositAccount implements NonWithdrawableAccount {
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Deposited:", amount, "FD balance:", this.balance);
    }
}

class BankClient {
    private withdrawableAccounts: WithdrawableAccount[];
    private nonWithdrawableAccounts: NonWithdrawableAccount[];

    constructor(withdrawableAccounts: WithdrawableAccount[], nonWithdrawableAccounts: NonWithdrawableAccount[]) {
        this.withdrawableAccounts = withdrawableAccounts;
        this.nonWithdrawableAccounts = nonWithdrawableAccounts;
    }

    processTransactions(): void {
        for (const acc of this.withdrawableAccounts) {
            acc.deposit(20000);
            acc.withdraw(100);
        }

        for (const acc of this.nonWithdrawableAccounts) {
            acc.deposit(90000);
        }
    }
}

const savings = new SavingsAccount();
const fd = new FixedDepositAccount();

const bankClient = new BankClient([savings], [fd]);

bankClient.processTransactions();
