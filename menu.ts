import read from "readline-sync";
import { about } from "./about";

export function main() {

    let inputOperation: number;

    const dataMenu: Array<{ code: number; description: string }> = [
    { code: 1, description: "Criar conta" },
    { code: 2, description: "Listar todas as contas" },
    { code: 3, description: "Buscar conta por número" },
    { code: 4, description: "Atualizar dados da conta" },
    { code: 5, description: "Apagar conta (cuidado)!" },
    { code: 6, description: "Sacar" },
    { code: 7, description: "Depositar" },
    { code: 8, description: "Transferir valores entre contas" },
    { code: 9, description: "Sair" }
    ];

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
            console.log("Operação não existe, por favor, escolha uma opção válida: ");
            continue;
        }

        if (operation?.code === 9) {
            console.log("Banco do Brazil com Z - O seu Futuro começa aqui!");
            about();
            process.exit(0);
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

main();