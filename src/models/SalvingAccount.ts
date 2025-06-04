import { Account } from "./Account";


export class SalvingAccount extends Account {
    private _birthday: number;

    constructor(number: number, agency: number, type: number, holder: string, balance: number, birthday: number) {
        super(number, agency, type, holder, balance);
        this._birthday = birthday;
    }

    public get birthday() {
        return this._birthday;
    }

    public set birthday(birthday: number) {
        this._birthday = birthday;
    }

    public view(): void {
        super.view();
        console.log(`Dia do aniversário: ${this._birthday}`);
    }

}