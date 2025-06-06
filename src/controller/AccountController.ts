import { Account } from "../models/Account";
import { IAccountRepository } from "../repository/IAccountRepository";


export class AccountController implements IAccountRepository {

    private listAccounts: Array<Account> = new Array<Account>();
    idAccount: number = 0;

    public generateIdAccount(): number {
        return ++ this.idAccount;
    }

    findAccountByNumber(id: number, returnAccount: boolean = false): void | Account {
        // for (let account of this.listAccounts) {
        //     if (account.number === id) return account
        // }

        // return null;

        let accountById = this.listAccounts.find((account) => account.number === id);

        if (returnAccount) return accountById; // Esse parâmetro acional e opcional foi feito para fazer o update para não criar o método auxiliar buscarNoArray já que o findAccountByNumber supre a necessidade e está no seu escopo

        if (accountById && accountById !== undefined) {
            accountById.view();
        } else {
            console.log(`A conta número: ${id} não foi encontrada!`);
        }
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
        let accountById = this.listAccounts.find((a) => a.number === account.number);

        if (accountById && accountById !== undefined) {
            this.listAccounts[this.listAccounts.indexOf(accountById)] = account;
            console.log(`A conta número: ${account.number} foi atualizada com sucesso!`);
        } else {
            console.log(`A conta número: ${account.number} não foi encontrada!`);
        }
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