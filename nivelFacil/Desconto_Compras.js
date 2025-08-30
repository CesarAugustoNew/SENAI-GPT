// Solicita o valor da compra
let valorCompra = Number(prompt("Digite o valor da compra:"));

// Verifica se o valor da compra é maior que 100
if (valorCompra > 100) {
    let desconto = valorCompra * 0.10; // Calcula 10% de desconto
    let valorComDesconto = valorCompra - desconto; // Subtrai o desconto do valor original
    alert(`O valor com desconto é: R$ ${valorComDesconto.toFixed(2)}`); 
} else {
    alert(`O valor da compra é: R$ ${valorCompra.toFixed(2)}`);
}
