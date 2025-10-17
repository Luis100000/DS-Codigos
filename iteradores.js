// Exercício 1
const nomes = ["Ana", "Bruno", "Carla"];
const iterador = nomes[Symbol.iterator]();

while (true) {
  const atual = iterador.next();
  if (atual.done) break;
  console.log(atual.value);
}

//
// Exercício 3
const clientes = ["Ana", "Bruno"];
const iteradorClientes = clientes[Symbol.iterator]();

console.log(iteradorClientes.next());
console.log(iteradorClientes.next());
console.log(iteradorClientes.next());

//
// Exercício 5
const texto = "Carla";
for (const letra of texto) {
  console.log(letra);
}

//
// Exercício 9
const dados = new Set(["A", "B", "C"]);
const iteradorSet = dados[Symbol.iterator]();

console.log(iteradorSet.next().value);

//
// Exercício 11
const mapa = new Map([[1, "A"], [2, "B"]]);
for (const par of mapa) {
  console.log(par);
}
