const prompt = require('prompt-sync')();

const numero = Number(prompt('Número: '));
let resto = '';
let divisores = '';
let soma = 0;

for (let i = 1; i < numero; i++) {
  resto = numero % i;
  if (resto == 0) {
    divisores = divisores + i + ', ';
    soma += i;
  }
}

console.log(`Divisores de ${numero}: ${divisores} (Soma: ${soma})`);

if (soma == numero) {
  console.log(`${numero} é um número Perfeito.`);
} else {
  console.log(`${numero} NÃO é um número Perfeito.`);
}
