import { Account } from "../models/Account";
import { IAccountRepository } from "../repository/IAccountRepository";


export class AccountController implements IAccountRepository {

    private listAccounts: Array<Account> = new Array<Account>();
    idAccount: number = 0;

    public generateIdAccount(): number {
        return ++ this.idAccount;
    }

    private accountById(number: number): Account | undefined {
        return this.listAccounts.find((account) => account.number === number);
    }

    findAccountByNumber(id: number, returnAccount: boolean = false): void | Account {

        let accountById = this.accountById(id);

        if (returnAccount) return accountById; // Esse parâmetro adicional e opcional foi feito para fazer o update para não criar o método auxiliar buscarNoArray já que o findAccountByNumber supre a necessidade e está no seu escopo

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
        let accountById = this.accountById(account.number);

        if (accountById && accountById !== undefined) {
            this.listAccounts[this.listAccounts.indexOf(accountById)] = account;
            console.log(`A conta número: ${account.number} foi atualizada com sucesso!`);
        } else {
            console.log(`A conta número: ${account.number} não foi encontrada!`);
        }
    }

    deleteAccount(number: number): void {
        let accountById = this.accountById(number);

        if (accountById && accountById !== undefined) {
            this.listAccounts.splice(this.listAccounts.indexOf(accountById), 1);
            console.log(`A conta número: ${number} foi apagada com sucesso!`);
        } else {
            console.log(`A conta número: ${number} não foi encontrada!`);
        }
    }

    withdraw(number: number, value: number): void {
        let account = this.accountById(number);

        if (!!account) {
            account.withdraw(value) && console.log(`Saque na conta número ${number} foi efetuado com sucesso!`);
        } else {
            console.log(`A conta número ${number} não foi encontrada!`);
        }
    }

    deposit(number: number, value: number): void {
        if (value <= 0) {
            console.log("Valor do depósito menor ou igual a zero! Por gentileza, inserir um valor válido!");
        } else {
            let account = this.accountById(number);
            
            if (!!account) {
                account.deposit(value);
                console.log(`Depósito na conta número ${number} foi efetuado com sucesso!`);
            } else {
                console.log(`A conta número ${number} não foi encontrada!`);
            }
        }

    }
    
    transfer(originNumber: number, destinationNumber: number, value: number): void {
        throw new Error("Method not implemented.");
    }
    
}