
function exercicio01() {
  let idade = prompt(`Qual sua idade`);
  if (idade >= 18) {
    alert(`Parabens! voce e maior de idade.`);
  } else {
    alert(`Voce e menor de idade`);
  }
}

function exercicio02() {
  const ano = Number(prompt("Digite um ano"));
  let bissexto;
  let resultado;
  if (ano % 4 === 0 && ano % 100 !== 0) {
    alert(`o ano ${ano} e bissexto`);
  } else if (ano % 400 === 0) {
    alert("O ano e bissexto");
  } else {
    alert("O ano nao  e bissexto");
  }
}

function exercicio03() {
  let numero1 = Number(prompt(`Digite o seu primeiro numero`));
  let numero2 = Number(prompt(`Digite o seu segundo numero`));
  let operacao = prompt(`escolha uma operacao +, -, *, /`);

  let resultado = 0;

  if (operacao == `+`) {
    resultado = numero1 + numero2;
  } else if (operacao == `-`) {
    resultado = numero1 - numero2;
  } else if (operacao == `*`) {
    resultado = numero1 * numero2;
  } else if (operacao == `/`) {
    resultado = numero1 / numero2;
  } else {
    alert("Opcao invalida!");
  }
  alert(resultado);
}

function exercicio04() {
  let idade = parseInt(prompt("Digite a sua idade"));
  if (idade >= 0 && idade <= 12) {
    alert("Você é uma criança");
  } else if (idade >= 13 && idade <= 17) {
    alert("Você é um adolescente");
  } else if (idade >= 18) {
    alert("Você é um adulto");
  }
}

function exercicio05() {
  // Solicita o valor da compra
  let valorCompra = Number(prompt("Digite o valor da compra:"));

  // Verifica se o valor da compra é maior que 100
  if (valorCompra > 100) {
    let desconto = valorCompra * 0.1; // Calcula 10% de desconto
    let valorComDesconto = valorCompra - desconto; // Subtrai o desconto do valor original
    alert(`O valor com desconto é: R$ ${valorComDesconto.toFixed(2)}`);
  } else {
    alert(`O valor da compra é: R$ ${valorCompra.toFixed(2)}`);
  }
}

function exercicio06() {
  let login = prompt(`Digite seu usuario`);
  let chave = prompt(`Digite sua senha`);
  const usuario = `cesar`;
  const senha = `batatatinha123`;

  if (usuario === login && senha === chave) {
    alert(`Login bem sucedido`);
  } else {
    alert(`Login errado`);
  }
}

function exercicio07() {
  let idade = prompt(`Qual sua idade`);
  if (idade >= 18) {
    alert(`Parabens! voce e maior de idade.`);
  } else {
    alert(`Voce e menor de idade`);
  }
}

function exercicio08() {
  let nota = prompt("Digite sua nota");
  if (nota >= 60) {
    alert("Parabens! voce foi aprovado");
  } else {
    alert("Voce foi reprovado");
  }
}

function exercicio09() {
  let numero = Number(prompt(`Digite um numero`));
  if (numero % 2 == 0) {
    alert(`Numero Par`);
  } else {
    alert(`Numero impar`);
  }
}

function exercicio10() {
  let numero = Number(prompt("Digite um numero"));
  if (numero > 0) {
    alert("Seu numero e positivo");
  } else if (numero < 0) {
    alert("Seu numero e negativo");
  } else {
    alert("Seu numero e igual a zero");
  }
}
