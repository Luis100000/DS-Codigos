// 1. Média de três notas (valores fixos)
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

const media = calcularMedia(6, 8, 7);
console.log(`A média das notas é: ${media.toFixed(2)}`);

// Ajuste para notas 6, 8 e 9.25
const novaMedia = calcularMedia(6, 8, 9.25);
console.log(`A média das notas é: ${novaMedia.toFixed(2)}`); // Resultado esperado: 7.75

// 3. Entrada do usuário via prompt
function calcularMediaComPrompt() {
  const nota1 = parseFloat(prompt("Digite a primeira nota:"));
  const nota2 = parseFloat(prompt("Digite a segunda nota:"));
  const nota3 = parseFloat(prompt("Digite a terceira nota:"));

  const media = calcularMedia(nota1, nota2, nota3);
  alert(`A média das notas é: ${media.toFixed(2)}`);
}

// 4. Resultado se as notas forem 5, 0, 5.5
const mediaExemplo = calcularMedia(5, 0, 5.5);
console.log(`A média das notas 5, 0, 5.5 é: ${mediaExemplo.toFixed(2)}`); // Resultado esperado: 3.50

// 5. Verificação de aprovação
function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

const resultado = verificarAprovacao(6.5);
console.log(`Resultado: ${resultado}`); // Resultado esperado: Reprovado

// 6. Resultado se a média for 6.5
const resultadoMedia = verificarAprovacao(6.5);
console.log(`Resultado para média 6.5: ${resultadoMedia}`); // Resultado esperado: Reprovado

// 7. Média com array e laço
function calcularMediaArray(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

const notas = [10, 9, 8];
const mediaArray = calcularMediaArray(notas);
console.log(`A média das notas é: ${mediaArray.toFixed(2)}`); // Resultado esperado: 9.00

// 8. Média das notas [10, 9, 8,33]
const mediaNotasExemplo = calcularMediaArray([10, 9, 8.33]);
console.log(`A média das notas [10, 9, 8.33] é: ${mediaNotasExemplo.toFixed(2)}`); // Resultado esperado: 9.11

// 10. Filtrar compras recentes com forEach
function comprarRecente(dataCompra) {
  const hoje = new Date();
  const dataCompraDate = new Date(dataCompra);
  const diffTime = hoje - dataCompraDate; // Diferença entre as datas em milissegundos
  const diffDays = diffTime / (1000 * 3600 * 24); // Converte a diferença para dias
  return diffDays <= 30; // Verifica se a compra foi feita nos últimos 30 dias
}

const compras = [
  { cliente: 'Ana', dataCompra: '2023-10-10' },
  { cliente: 'Carlos', dataCompra: '2023-09-15' },
  { cliente: 'Fernanda', dataCompra: '2023-09-30' },
  { cliente: 'João', dataCompra: '2023-10-05' },
  { cliente: 'Maria', dataCompra: '2023-09-25' },
  { cliente: 'Lucas', dataCompra: '2023-10-01' },
  { cliente: 'Pedro', dataCompra: '2023-08-15' },
  { cliente: 'Julia', dataCompra: '2023-09-28' },
  { cliente: 'Fernanda', dataCompra: '2023-10-03' },
  { cliente: 'Ricardo', dataCompra: '2023-09-20' }
];

compras.forEach(compra => {
  if (comprarRecente(compra.dataCompra)) {
    console.log(`Cliente: ${compra.cliente} fez uma compra recente em ${compra.dataCompra}`);
  }
});

// 12. Remover duplicados com Set e iterador
const nomes = [
  'Ana', 
  'Carlos', 
  'Maria', 
  'Ana', 
  'João', 
  'Maria', 
  'Fernanda', 
  'Carlos', 
  'Pedro', 
  'Fernanda'
];

// Criação de um Set para remover duplicados automaticamente
const nomesUnicos = new Set(nomes);

// Exibição dos nomes únicos usando um iterador (for...of)
console.log("Nomes únicos da lista:");
for (const nome of nomesUnicos) {
  console.log(nome);
}
