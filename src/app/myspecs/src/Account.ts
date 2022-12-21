export class Account
{
    constructor(private balance: number)
    {

    }
    public GetBalance(): number
    {
        return this.balance;
    }
    public Withdraw(amt: number): void
    {
        this.balance -= amt;
    }
    public Deposit(amt: number): void
    {
        this.balance += amt;
    }
}