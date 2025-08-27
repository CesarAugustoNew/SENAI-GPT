let numero1 = Number(prompt(`Digite o seu primeiro numero`))
let numero2 = Number(prompt(`Digite o seu segundo numero`))
let operacao = prompt(`escolha uma operacao +, -, *, /`)

let resultado = 0

if (operacao == `+`){
    resultado = numero1 + numero2;
}else if (operacao == `-`){
    resultado = numero1 - numero2;    
}else if (operacao == `*`){
    resultado = numero1 * numero2;   
}else if (operacao == `/`){
    resultado = numero1 / numero2;
}else {
    alert("Opcao invalida!")
}
alert(resultado)
    