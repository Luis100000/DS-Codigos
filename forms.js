
// Inicializando as estruturas de dados
let nomes = [];
let emails = new Set();
let telefones = new Map();

// Função para capturar dados dos usuários
function cadastrarDados() {
    // Captura de 10 nomes
    for (let i = 0; i < 10; i++) {
        let nome = prompt("Digite o nome do cliente " + (i + 1) + ":");
        nomes.push(nome);
    }

    // Captura de 10 e-mails únicos
    for (let i = 0; i < 10; i++) {
        let email = prompt("Digite o e-mail do cliente " + (i + 1) + ":");
        emails.add(email);
    }

    // Captura de 10 IDs e telefones
    for (let i = 0; i < 10; i++) {
        let id = prompt("Digite o ID do cliente " + (i + 1) + ":");
        let telefone = prompt("Digite o telefone do cliente " + (i + 1) + ":");
        telefones.set(id, telefone);
    }
}

// Função para exibir os dados
function exibirDados() {
    // Exibindo os dados
    console.log("Lista de Nomes Cadastrados:");
    nomes.forEach((nome, index) => {
        console.log((index + 1) + ". " + nome);
    });

    console.log("\nConjunto de E-mails Únicos:");
    emails.forEach((email) => {
        console.log(email);
    });

    console.log("\nMapa de Telefones por ID:");
    telefones.forEach((telefone, id) => {
        console.log("ID: " + id + " - Telefone: " + telefone);
    });
}

// Chama as funções
cadastrarDados();
exibirDados();

