import { Account } from "./Account";


export class CurrencyAccount extends Account {
    private _specialLimit: number;

    constructor(number: number, agency: number, type: number, holder: string, balance: number, specialLimit: number) {
        super(number, agency, type, holder, balance);
        this._specialLimit = specialLimit;
    }

    public get specialLimit() {
        return this._specialLimit;
    }

    public set specialLimit(specialLimit: number) {
        this._specialLimit = specialLimit;
    }

    public withdraw(value: number): boolean {
        if ((this.balance + this._specialLimit ) < value) {
            console.log(`Saldo insuficiente!`);
            return false;
        }

        this.balance -= value;
        return true;
    }

    public view(): void {
        super.view();
        console.log(`Limite: ${this._specialLimit.toFixed(2)}`);
    }

}