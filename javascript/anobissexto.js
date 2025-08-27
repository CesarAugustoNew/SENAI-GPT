const ano = Number(prompt("Digite um ano"))
let bissexto
let resultado
if(ano%4 ===0 && ano %100 !==0){
    alert(`o ano ${ano} e bissexto`)
}else if (ano %400 ===0){
    alert("O ano e bissexto")
}else {
    alert("O ano nao  e bissexto")
}