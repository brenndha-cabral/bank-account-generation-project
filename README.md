# 💳 Bank Account Generation Project

Projeto em desenvolvimento contínuo com foco em lógica de programação, organização de dados, boas práticas em TypeScript e simulação de funcionalidades bancárias (como criação e manipulação de contas). Este repositório evoluirá conforme meu aprendizado em desenvolvimento back-end e estruturação de sistemas.

---

## 📌 Objetivo

Construir, com TypeScript, um sistema de geração e gerenciamento de contas bancárias, com funcionalidades como:

- Cadastro de clientes com nome e tipo de conta (corrente ou poupança)
- Validação de tipos de conta
- Geração de número de conta aleatório
- Exibição de todas as contas criadas
- Estrutura modular, separando responsabilidades por pastas e arquivos

---

## 🚀 Próximos passos

Este repositório é focado em **aprendizado e prática** e é atualizado constantemente e seu README é vivo, atualizado de acodo com os novos aprendizados de cada semana e conforme os requisitos do projeto forem disponibilizados.

---

## 🛠 Tecnologias utilizadas (atualizadas)

- TypeScript
- JavaScript
- Node.js
- Readline-Sync
- Git + GitHub

---

## 🧠 Aprendizados

- [x] Manipulação de arrays e objetos
- [x] Organização de código por responsabilidade
- [x] Modularização com `import`
- [x] Leitura e escrita em arquivos (futuramente)
- [x] Simulação de regras de negócio bancário
- [x] Criação de conta bancária com dados validados
- [x] Geração de número de conta único
- [x] Simulação de tipos de conta a partir de dados estruturados
- [x] Organização em camadas
- [x] Menu de opções no terminal para interação com o usuário
- [x] Boas práticas com `TypeScript`, incluindo tipagem e estruturação clara

---

## 🗂️ Estrutura do Projeto

```plaintext
📁 bank-account-generation-project
├── 📁 src
│   ├── 📁 controller
│   │   ├── 📄 AccountController.ts
│   ├── 📁 models
│   │   ├── 📄 Account.ts
│   │   ├── 📄 CurrencyAccount.ts
│   │   ├── 📄 SalvingAccount.ts
│   ├── 📁 repository
│   │   └── 📄 IAccountRepository.ts
│   ├── 📁 utils
│   │   └── 📄 about.ts
│   │   └── 📄 dataTypesAccount.ts
│   │   └── 📄 dataMenu.ts
│   └── 📄 Menu.ts
├── 📄 Index.ts
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 README.md
├── 📄 tsconfig.json
```

---

## 🛠️ Como executar na sua máquina

1. **Clone o repositório:**

```bash
git clone https://github.com/brenndha-cabral/bank-account-generation-project.git
````

2. **Acesse a pasta do projeto:**

```bash
cd bank-account-generation-project
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto:**

```bash
ts-node index.ts
```
---

## 📌 Sobre

Feito com dedicação por [Brenndha Cabral](https://www.linkedin.com/in/brenndhacabral/) durante o bootcamp da Generation Brasil.  
Este espaço é onde pratico, erro, corrijo e aprendo 💪✨
