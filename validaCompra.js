// Variáveis com os valores de saldo e da compra
let saldo_disponivel = 100;
let valor_compra = 75;

// Verificando se o saldo é suficiente
if (saldo_disponivel >= valor_compra) {
    let saldo_restante = saldo_disponivel - valor_compra;
    console.log("Compra aprovada! Seu novo saldo é: " + saldo_restante);
} else {
    console.log("Saldo insuficiente. A compra não pode ser realizada.");
}
