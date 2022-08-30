/**# Exercício 3

Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/

// a)
const a = (5 > 20) && (20 < 2)
console.log(a) 
/** FALSE: 5 é menor que 20, portanto false.  20 é maior que 2, portanto false.  Sendo assim: false && false retorna false */


// b)
const b = (5 === 5) && (5 === 5)
console.log(b)
/** TRUE:  5 é igual a 5, portanto true. 5 é igual a 5, portanto true. Sendo assim: true && true retorna true */

// c)
const c = !(20 > 50)
console.log(c)
/**TRUE: 20 é menor que 50, portanto false. Sendo assim a negação de false trona-se true */

// d)
const d = !(20 > 50 || 50 > 60)
console.log (d)
/** TRUE: 20 é menor que 50, portanto false. 50 é menor que 60, portanto false. o resultado de false || false 
 * continua sendo false, entrento, como estamos negando o resultado, este torna-se true.  */
