import { Account } from "../models/Account";
import { IAccountRepository } from "../repository/IAccountRepository";


export class AccountController implements IAccountRepository {

    private listAccounts: Array<Account> = new Array<Account>();
    idAccount: number = 0;

    public generateIdAccount(): number {
        return ++ this.idAccount;
    }

    findAccountByNumber(number: number): void {
        throw new Error("Method not implemented.");
    }
    listAllAccounts(): void {
        for (let account of this.listAccounts) {
            account.view();
        }
    }
    registerAccount(account: Account): void {
        this.listAccounts.push(account);
        console.log(`A conta número: ${account.number} foi criada com sucesso!`);
    }
    updateAccount(account: Account): void {
        throw new Error("Method not implemented.");
    }
    deleteAccount(number: number): void {
        throw new Error("Method not implemented.");
    }
    withdraw(number: number, value: number): void {
        throw new Error("Method not implemented.");
    }
    deposit(number: number, value: number): void {
        throw new Error("Method not implemented.");
    }
    transfer(originNumber: number, destinationNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }
    
}