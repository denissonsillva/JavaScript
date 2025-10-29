const prompt = require('prompt-sync')();

const chinchilaInicial = Number(prompt('Número: '));
const ano = Number(prompt('Ano: '));

// Validação básica para evitar cálculos com valores inválidos
if (isNaN(chinchilaInicial) || chinchilaInicial <= 0 || isNaN(ano) || ano <= 0) {
  resp1.innerText = 'Por favor, insira valores válidos.';
  return; // Sai da função se os valores forem inválidos
}

let resposta = '';
let populacaoAtual = chinchilaInicial;

for (let i = 1; i <= ano; i++) {
  populacaoAtual = populacaoAtual * 3;
  resposta = resposta + i + 'º Ano: ' + populacaoAtual + ' Chinchilas\n';
}

console.log(resposta);
