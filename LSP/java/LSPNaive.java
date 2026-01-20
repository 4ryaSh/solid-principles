import java.util.ArrayList;

abstract class Account {
    abstract void deposit(int amount);
    abstract void withdraw(int amount);
}

class SavingsAccount extends Account {
    private int balance;

    public SavingsAccount() {
        balance = 0;
    }

    @Override
    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Savings Account. New Balance: " + balance);
    }

    @Override
    public void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + " from Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Insufficient funds in Savings Account!");
        }
    }
}

class CurrentAccount extends Account {
    private int balance;

    public CurrentAccount() {
        balance = 0;
    }

    @Override
    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Current Account. New Balance: " + balance);
    }

    @Override
    public void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount + " from Current Account. New Balance: " + balance);
        } else {
            System.out.println("Insufficient funds in Current Account!");
        }
    }
}

class FixedDepositAccount extends Account {
    private int balance;

    public FixedDepositAccount() {
        balance = 0;
    }

    @Override
    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited: " + amount + " in Fixed Deposit Account. New Balance: " + balance);
    }

    @Override
    public void withdraw(int amount) {
        throw new UnsupportedOperationException("Withdrawal not allowed in Fixed Deposit Account!");
    }
}

class BankClient {
    private ArrayList<Account> accounts;

    public BankClient(ArrayList<Account> accounts) {
        this.accounts = accounts;
    }

    public void processTransactions() {
        for (Account account : accounts) {
            account.deposit(20000);

            // checking type and skipping withdrawal for FixedDepositAccount
            if (account instanceof FixedDepositAccount) {
                System.out.println("Withdrawal not allowed in Fixed Deposit Account!");
            } else {
                try {
                    account.withdraw(100);
                } catch (UnsupportedOperationException e) {
                    System.out.println("Exception: " + e.getMessage());
                }
            }
        }
    }
}

public class LSPNaive {
    public static void main(String[] args) {
        ArrayList<Account> accounts = new ArrayList<>();
        accounts.add(new SavingsAccount());
        accounts.add(new CurrentAccount());
        accounts.add(new FixedDepositAccount());

        BankClient bankClient = new BankClient(accounts);
        bankClient.processTransactions();
    }
}
