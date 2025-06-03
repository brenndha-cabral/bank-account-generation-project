import read from "readline-sync";
import { about } from "./utils/about";
import { Account } from "./models/Account";
import { dataMenu } from "./utils/dataMenu";

export function main() {

    let inputOperation: number;
    const account: Account = new Account(1, 123, 1, "Adriana", 10000);

    account.view();
    account.withdraw(10500);
    account.withdraw(600);
    account.view();
    account.deposit(5000);
    account.view();

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
                break;

            case 2:
                console.log(`\n${operation.description}`);
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
