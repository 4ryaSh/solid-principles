import java.util.ArrayList;

// Non withdrawable account
abstract class NonWithdrawableAccount {
    public abstract void deposit(int amount);
}

// Withdrawable account
abstract class WithdrawableAccount extends NonWithdrawableAccount {
    public abstract void withdraw(int amount);
}

class SavingsAccount extends WithdrawableAccount {
    private int balance = 0;

    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Savings Account. New Balance: " + balance);
    }

    public void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + " from Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Insufficient funds in Savings Account!");
        }
    }
}

class CurrentAccount extends WithdrawableAccount {
    private int balance = 0;

    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Current Account. New Balance: " + balance);
    }

    public void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + " from Current Account. New Balance: " + balance);
        } else {
            System.out.println("Insufficient funds in Current Account!");
        }
    }
}

class FixedDepositAccount extends NonWithdrawableAccount {
    private int balance = 0;

    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Fixed Deposit Account. New Balance: " + balance);
    }
}

class BankClient {
    private ArrayList<NonWithdrawableAccount> nonWithdrawableAccounts;
    private ArrayList<WithdrawableAccount> withdrawableAccounts;

    public BankClient(ArrayList<NonWithdrawableAccount> nonWithdrawableAccounts, ArrayList<WithdrawableAccount> withdrawableAccounts) {
        this.nonWithdrawableAccounts = nonWithdrawableAccounts;
        this.withdrawableAccounts = withdrawableAccounts;
    }

    public void processTransactions() {
        for (WithdrawableAccount account : withdrawableAccounts) {
            account.deposit(20000);
            account.withdraw(100);
        }

        for (NonWithdrawableAccount account : nonWithdrawableAccounts) {
            account.deposit(90000);
        }
    }
}

public class LSPIntact {
    public static void main(String[] args) {
        ArrayList<NonWithdrawableAccount> nonWithdrawableAccounts = new ArrayList<>();
        ArrayList<WithdrawableAccount> withdrawableAccounts = new ArrayList<>();

        SavingsAccount sa = new SavingsAccount();
        CurrentAccount ca = new CurrentAccount();
        FixedDepositAccount fa = new FixedDepositAccount();

        nonWithdrawableAccounts.add(fa);
        withdrawableAccounts.add(sa);
        withdrawableAccounts.add(ca);

        BankClient bankClient = new BankClient(nonWithdrawableAccounts, withdrawableAccounts);
        bankClient.processTransactions();
    }
}
