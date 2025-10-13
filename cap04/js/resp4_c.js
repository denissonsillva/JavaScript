const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const valor = parseFloat(frm.inValor.value);
  let tempo;
  let troco;

  if (valor < 1.0) {
    alert('O depósito mínimo é de R$ 1,00');
    frm.inValor.focus();
    return;
  } else if (valor >= 1 && valor < 1.75) {
    tempo = 30;
    troco = valor - 1;
  } else if (valor >= 1.75 && valor < 3) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 120;
    troco = valor - 3;
  }
  resp1.innerText = `Tempo: ${tempo} minutos`;
  resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`;
});
