import { Account } from "../models/Account";

export interface IAccountRepository {
    findAccountByNumber(number: number): void;
    listAllAccounts(): void;
    registerAccount(account: Account): void;
    updateAccount(account: Account): void;
    deleteAccount(number: number): void;

    withdraw(number: number, value: number): void;
    deposit(number: number, value: number): void;
    transfer(originNumber: number, destinationNumber: number, value: number): void;
};