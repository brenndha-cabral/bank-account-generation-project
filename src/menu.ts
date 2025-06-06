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
    let option, number, agency, type, balance, specialLimit, birthday, value, destinyNumber: number;
    let holder: string;


    // Teste de simulação para não ficar imputando na mão no console
    console.log("\nCriar Contas\n");

    let cc1: CurrencyAccount = new CurrencyAccount(accounts.generateIdAccount(), 123, 1, "João da Silva", 1000, 100.0);
    accounts.registerAccount(cc1);

    let cc2: CurrencyAccount = new CurrencyAccount(accounts.generateIdAccount(), 124, 1, "Maria da Silva", 2000, 100.0);
    accounts.registerAccount(cc2);

    let cp1: SalvingAccount = new SalvingAccount(accounts.generateIdAccount(), 125, 2, "Mariana dos Santos", 4000, 12);
    accounts.registerAccount(cp1);

    let cp2: SalvingAccount = new SalvingAccount(accounts.generateIdAccount(), 125, 2, "Juliana Ramos", 8000, 15);
    accounts.registerAccount(cp2);
    // Final do teste de simulação, esse trecho pode ser apagado depois se necessário


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
                console.log("Digite o número da conta: ");
                number = read.questionInt();
                accounts.findAccountByNumber(number);
                break;
            
            case 4:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da conta: ");
                number = read.questionInt();

                let account = accounts.findAccountByNumber(number, true);

                if (!!account) {
                
                    type = account.type;
                
                    console.log("Digite o número da agência: ")
                    agency = read.questionInt();

                    console.log("Digite o nome do titular da conta: ");
                    holder = read.question();

                    console.log("Digite o saldo da conta (R$): ");
                    balance = read.questionFloat();

                    switch (type) {
                        case 1:
                            console.log("Digite o limite do cheque especial da conta (R$): ");
                            specialLimit = read.questionFloat();
                            accounts.updateAccount(
                                new CurrencyAccount(number, agency, type, holder, balance, specialLimit)
                            );
                            break;
                        
                        case 2:
                            console.log("Digite o dia do aniversário da conta poupança: ");
                            birthday = read.questionInt();
                            accounts.updateAccount(
                                new SalvingAccount(number, agency, type, holder, balance, birthday)
                            );
                            break;
                    }
                } else {
                    console.log(`A conta número: ${number} não foi encontrada!`);
                }
                break;
            
            case 5:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da conta: ")
                number = read.questionInt("");
                accounts.deleteAccount(number);
                break;
            
            case 6:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da conta: ");
                number = read.questionInt();

                console.log("Digite o valor do saque (R$): ");
                value = read.questionFloat();

                accounts.withdraw(number, value);
                break;
            
            case 7:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da conta: ");
                number = read.questionInt();

                console.log("Digite o valor do depósito (R$): ");
                value = read.questionFloat();

                accounts.deposit(number, value);
                break;
            
            case 8:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da conta de origem: ");
                number = read.questionInt();

                console.log("Digite o número da conta de destino: ");
                destinyNumber = read.questionInt();

                console.log("Digite o valor do depósito (R$): ");
                value = read.questionFloat();

                accounts.transfer(number, destinyNumber, value);
                break;
            
            default:
                break;
        }
    }
};
