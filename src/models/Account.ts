import { dataTypesAccount } from "../utils/dataTypesAccounts";

export abstract class Account {
    private _number: number;
    private _agency: number;
    private _type: number;
    private _holder: string;
    private _balance: number;


    constructor(number: number, agency: number, type: number, holder: string, balance: number) {
        this._number = number;
        this._agency = agency;
        this._type = type;
        this._holder = holder;
        this._balance = balance;
    }

    public get number() {
        return this._number;
    }

    public set number(number: number) {
        this._number = number;
    }

    public get agency() {
        return this._agency;
    }

    public set agency(agency: number) {
        this._agency = agency;
    }

    public get type() {
        return this._type;
    }

    public set type(type: number) {
        this._type = type;
    }

    public get holder() {
        return this._holder;
    }

    public set holder(holder: string) {
        this._holder = holder;
    }

    public get balance() {
        return this._balance;
    }

    public set balance(balance: number) {
        this._balance = balance;
    }

    public withdraw(value: number): boolean {
        if (this._balance < value) {
            console.log(`Saldo insuficiente!`);
            return false;
        }

        this._balance -= value;
        return true;
    }

    public deposit(value: number): void {
        this._balance += value;
    }

    public view(): void {
        let typeAccount = dataTypesAccount.find((type) => type.code === this._type);

        if (!typeAccount) {
            console.log("Tipo de conta inválido!")
        } else {
            console.log(`
*****************************************************
Dados da Conta:
*****************************************************
Número da Conta: ${this._number}
Agência: ${this._agency}
Tipo da Conta: ${typeAccount.description}
Titular: ${this._holder}
Saldo: ${this._balance.toFixed(2)}
`);
        }

        // Fazendo pelo switch case seria bacana mas reforcei um conhecimento sobre o find percorrendo um array de objetos como em outros exercícios eu usei, é interessante pois se surgir outros tipos de conta como salário, aposentadoria etc, acrescenta-se apenas no objeto

        // let tipo: string = "";

        // switch (this._tipo) {
        //     case 1:
        //         tipo = "Conta Corrente";
        //         break;
        //     case 2:
        //         tipo = "Conta Poupança";
        //         break;
        // }
    }
    
}