const prompt = require('prompt-sync')();

const salario = Number(prompt('Salário R$: '));
const tempo = Number(prompt('Tempo de serviço: '));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * 0.01;
const salarioAtual = salario + quadrienios * acrescimo;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário R$: ${(salario + acrescimo * quadrienios).toFixed(2)}`);
