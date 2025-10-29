const frm = document.querySelector('form');
const resp = document.querySelector('h3'); // Variável para o elemento de resposta

frm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  // Converte explicitamente os valores para números
  const chinchilaInicial = Number(frm.inChinchila.value);
  const ano = Number(frm.inNumero.value);

  // Validação básica para evitar cálculos com valores inválidos
  if (isNaN(chinchilaInicial) || chinchilaInicial <= 0 || isNaN(ano) || ano <= 0) {
    resp1.innerText =
      'Por favor, insira valores válidos e maiores que zero para as chinchilas e os anos.';
    return; // Sai da função se os valores forem inválidos
  }

  let resposta = '';
  let populacaoAtual = chinchilaInicial; // Variável para acompanhar o crescimento da população

  for (let i = 1; i <= ano; i++) {
    // A cada ano, a população triplica com base na população atual
    populacaoAtual = populacaoAtual * 3;
    resposta += `${i}º Ano: ${populacaoAtual} Chinchilas\n`; // Usando template literals para melhor legibilidade
  }

  resp.innerText = resposta; // Correção: Usar resp1
});
