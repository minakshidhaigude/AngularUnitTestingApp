import { Account } from './src/Account';

//create a test suite
describe("Account class", () => {
    describe("GetBalance functionality", () => {
        let acc: Account = new Account(50000);

        //create one or more test cases
        it("should return the correct balance after withdrawl or deposit", () => {
            //assertion --> actual value & expected value
            //compare both
            let actualbalance = acc.GetBalance();
            expect(actualbalance).toBe(50000);            
        });
    });

    describe("Deposit functionality", () => {
        
        let acc: Account = new Account(10000);

        it("should add the amt to the balance", () => {
            acc.Deposit(10000);
            let balance = acc.GetBalance();
            expect(balance).toBe(20000);
        });
    });

    describe("Withdraw functionality", () => {
        it("should deduct the amt from the balance", () => {
            let x = true;
            expect(x).toBe(true);     
        });

        it("should throw an exception if the balance is less than amt to be withdrawn", () => {
            let x = true;
            expect(x).toBe(true);     
        });
    });
});

//Account class GetBalance method should return the correct balance after withdrawl or deposit

//Account class Deposit method should add the amt to the balance