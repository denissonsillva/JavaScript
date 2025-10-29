const prompt = require('prompt-sync')();

const fruta = prompt('Frunta: ');
const num = Number(prompt('Número: '));
let resposta = '';

for (let i = 1; i < num; i++) {
  resposta = resposta + fruta + ' * ';
}

console.log(resposta + fruta);
