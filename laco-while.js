// 1. Palavra com mais de 8 letras
let palavra = prompt("Digite uma palavra com mais de 8 letras:");
while (palavra.length <= 8) {
  palavra = prompt("Palavra muito curta. Digite uma palavra com mais de 8 letras:");
}
console.log("Palavra válida:", palavra);

// 2. Soma de números aleatórios até ultrapassar 500
let soma = 0;
while (soma <= 500) {
  let numeroAleatorio = Math.floor(Math.random() * 100);
  console.log("Número gerado:", numeroAleatorio);
  soma += numeroAleatorio;
}
console.log("Soma total:", soma);

// 3. Número de calçado entre 34 e 44
let numeroCalcado = parseInt(prompt("Digite o número do seu calçado (entre 34 e 44):"));
while (isNaN(numeroCalcado) || numeroCalcado < 34 || numeroCalcado > 44) {
  numeroCalcado = parseInt(prompt("Número inválido. Digite um número entre 34 e 44:"));
}
console.log("Número de calçado aceito:", numeroCalcado);

// 4. Múltiplo de 3 e 5 ao mesmo tempo
let numeroMultiplo = 0;
while (numeroMultiplo % 3 !== 0 || numeroMultiplo % 5 !== 0 || numeroMultiplo === 0) {
  numeroMultiplo = Math.floor(Math.random() * 100);
  console.log("Gerado:", numeroMultiplo);
}
console.log("Número múltiplo de 3 e 5:", numeroMultiplo);

// 5. Idade entre 18 e 60
let idade = parseInt(prompt("Digite sua idade (entre 18 e 60):"));
while (isNaN(idade) || idade < 18 || idade > 60) {
  idade = parseInt(prompt("Idade inválida. Digite uma idade entre 18 e 60:"));
}
console.log("Idade válida:", idade);

// 6. Senha com pelo menos 1 letra e 1 número
function temLetraENumero(senha) {
  return /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha);
}

let senha = prompt("Digite uma senha com pelo menos 1 letra e 1 número:");
while (!temLetraENumero(senha)) {
  senha = prompt("Senha inválida. Deve conter pelo menos 1 letra e 1 número:");
}
console.log("Senha válida:", senha);
