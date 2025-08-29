let numero = String(prompt('Digite um numero inteiro positivo'));
let i =0
let letras = numero.length
let soma=0

while (i < letras) {  
    soma += Number(numero[i]);
    alert(soma)
    i++
}



