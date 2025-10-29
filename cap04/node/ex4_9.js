const prompt = require('prompt-sync')();

const numero = Number(prompt('Número: '));

if (numero < 100 || numero > 999) {
  console.log('Número inválido, deve ser entre 100 e 999');
} else {
  const num1 = Math.floor(numero / 100);
  const sobra = numero % 100;
  const num2 = Math.floor(sobra / 10);
  const num3 = sobra % 10;

  console.log(`Invertido: ${num3}${num2}${num1}`);
}
