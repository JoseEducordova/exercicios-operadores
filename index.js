/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/


/*const idade = Number(prompt("Qual sua idade? "))
const idadeum = Number(prompt("Qual a idade do/a seu/sua melhor amigo/a"))
const resultado = idade > idadeum
const resultadodois = idade - idadeum

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log("A diferença entre a idade de voces é de: ", resultadodois)*/


/*let numeropar = Number(prompt("insira um numero par:"))

resultado = numeropar % 2

console.log("O numero par é: ", resultado)*/

//ambas as tentativas resultavam em 0...como se independente do numero que 
//fosse colocado resultaria em 0. Após tais tentativas com numero impar, o resultado passou a ser 1.


/*const idade = Number(prompt("Digite sua idade:" ))

resultadodias = idade * 365
resultadomeses = idade * 12
resultadohoras = idade * 8760

console.log("Sua idade em dias é de:", resultadodias)
console.log("Sua idade em meses é de:", resultadomeses)
console.log("Sua idade em horas é de:", resultadohoras)*/

let numeroum = Number(prompt("insira um numero:"))
let numerodois = Number(prompt("insira um segundo numero:"))

resultadoum = numeroum > numerodois
resultadodois = numeroum === numerodois
resultadotres = numeroum % numerodois == 0 
resultadoquatro = numerodois % numeroum == 0 

console.log("O primeiro numero é maior que segundo?", resultadoum)
console.log("O primeiro numero é igual ao segundo?", resultadodois)
console.log("O primeiro numero é divisível pelo segundo?", resultadotres)
console.log("O segundo numero é divisível pelo primeiro?", resultadoquatro)



