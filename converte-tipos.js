// Solicitar a idade, peso e altura ao usuário
let idade = prompt("Qual é a sua idade?");
let peso = prompt("Qual é o seu peso em kg?");
let altura = prompt("Qual é a sua altura em metros?");

// Converter as entradas para os tipos corretos
idade = parseInt(idade);      // Converte para número inteiro
peso = parseFloat(peso);      // Converte para número decimal
altura = parseFloat(altura);  // Converte para número decimal

// Exibir os resultados no console
console.log("Idade: " + idade);   // Agora 'idade' é um número inteiro
console.log("Peso: " + peso);     // Agora 'peso' é um número decimal
console.log("Altura: " + altura); // Agora 'altura' é um número decimal
