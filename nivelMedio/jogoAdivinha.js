const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let numero;

while (true) {
  numero = Number(prompt("Adivinhe o número entre 1 e 100:"));

  if (numero > numeroSecreto) {
    alert("Maior que o numero.");
  } else if (numero < numeroSecreto) {
    alert("Menor que o numero.");
  } else if (numero === numeroSecreto) {
    alert("Parabéns! Você acertou!");
  }
}
