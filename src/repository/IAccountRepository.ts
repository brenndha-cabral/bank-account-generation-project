import { Account } from "../models/Account";

export interface IAccountRepository {
    findAccountByNumber(id: number, returnAccount?: boolean): void | Account;
    listAllAccounts(): void;
    registerAccount(account: Account): void;
    updateAccount(account: Account): void;
    deleteAccount(id: number): void;

    withdraw(number: number, value: number): void;
    deposit(number: number, value: number): void;
    transfer(originNumber: number, destinationNumber: number, value: number): void;
};