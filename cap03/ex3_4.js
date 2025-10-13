const prompt = require('prompt-sync')();

const racao = Number(prompt('Quantidade de ração (kg): '));
const consumoDiario = Number(prompt('Consumo diário (g): '));
const duracao = (racao * 1000) / consumoDiario;
const sobra = (racao * 1000) % consumoDiario;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} g`);
