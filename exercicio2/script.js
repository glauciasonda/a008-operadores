
let primeiroNumero = Number(prompt("Informe um número"))
let segundoNumero = Number(prompt ("Informe um segundo número para inicarmos as comparações... "))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)
console.log("O segundo numero é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)