import read from "readline-sync";
import { about } from "./utils/about";
// import { Account } from "./models/Account";
import { dataMenu } from "./utils/dataMenu";
import { CurrencyAccount } from "./models/CurrencyAccount";
import { SalvingAccount } from "./models/SalvingAccount";
import { AccountController } from "./controller/AccountController";
import { dataTypesAccount } from "./utils/dataTypesAccounts";

export function main() {

    let inputOperation: number;
    let accounts: AccountController = new AccountController();
    let option, number, agency, type, balance, specialLimit, birthday: number;
    let holder: string;
    // const typesAccounts = dataMenu

    // const currencyAccount: CurrencyAccount = new CurrencyAccount(2, 123, 1, "Mariana", 15000, 1000);

    // currencyAccount.view();
    // currencyAccount.withdraw(2000);
    // currencyAccount.view();
    // currencyAccount.deposit(1000);
    // currencyAccount.view();

    // const salvingAccount: SalvingAccount = new SalvingAccount(3, 123, 2, "Victor", 1000, 10);

    // salvingAccount.view();
    // salvingAccount.withdraw(200);
    // salvingAccount.view();
    // salvingAccount.deposit(1000);
    // salvingAccount.view();

    while (true) {

        console.log(`
*****************************************************

              BANCO DO BRAZIL COM Z

*****************************************************

${dataMenu.map((operation) =>`${operation.code} - ${operation.description}`).join('\n')}

*****************************************************`);

        console.log("Entre com a opção desejada: ");
        inputOperation = read.questionInt();
        const operation = dataMenu.find((operation) => operation.code === inputOperation);

        if (!operation) {
            console.log("\nOperação não existe, por favor, escolha uma opção válida: ");
            continue;
        }

        if (operation.code === 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            about();
            process.exit(0);
            /* encerra o programa manualmente (se houver código abaixo fora do escopo não vai mais rodar, e o arg é um código de saída
             o 0 por exemplo significa saída sem erros, se fosse 1 seria com erro genérico e existem outros códigos também) */
        }

        switch (operation.code) {
            case 1:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da agência: ")
                agency = read.questionInt();

                console.log("Digite o nome do titular da conta: ");
                holder = read.question();

                console.log(`Digite o tipo da conta: 
${dataTypesAccount.map((type) => `${type.code} - ${type.description}`).join('\n')}`);
                type = read.questionInt();

                console.log("Digite o saldo da conta (R$): ");
                balance = read.questionFloat();

                switch (type) {
                    case 1:
                        console.log("Digite o limite do cheque especial da conta (R$): ");
                        specialLimit = read.questionFloat();
                        accounts.registerAccount(
                            new CurrencyAccount(accounts.generateIdAccount(), agency, type, holder, balance, specialLimit)
                        );
                        break;
                    
                    case 2:
                        console.log("Digite o dia do aniversário da conta poupança: ");
                        birthday = read.questionInt();
                        accounts.registerAccount(
                            new SalvingAccount(accounts.generateIdAccount(), agency, type, holder, balance, birthday)
                        );
                        break;
                }

                break;

            case 2:
                console.log(`\n${operation.description}`);
                accounts.listAllAccounts();
                break;
            
            case 3:
                console.log(`\n${operation.description}`);
                break;
            
            case 4:
                console.log(`\n${operation.description}`);
                break;
            
            case 5:
                console.log(`\n${operation.description}`);
                break;
            
            case 6:
                console.log(`\n${operation.description}`);
                break;
            
            case 7:
                console.log(`\n${operation.description}`);
                break;
            
            case 8:
                console.log(`\n${operation.description}`);
                break;
            
            default:
                break;
        }
    }
};
