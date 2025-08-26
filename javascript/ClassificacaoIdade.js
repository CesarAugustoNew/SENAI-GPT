let idade = parseInt(prompt("Digite a sua idade"));
if (idade >= 0 && idade <= 12) {
  alert("Você é uma criança");
} else if (idade >= 13 && idade <= 17) {
  alert("Você é um adolescente");
} else if (idade >= 18) {
  alert("Você é um adulto");
}