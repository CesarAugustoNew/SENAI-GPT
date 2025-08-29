let number = Number(prompt("Digite um numero para ver a tabuada dele de 1 a 10"));
let i 
let result = 0
for (let i = 1; i <= 10; i++) {
    result = number * i
    alert(`${result}`)
}