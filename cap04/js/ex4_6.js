const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const saque = Number(frm.inSaque.value);

  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, R$ 50 e R$ 100)');
    frm.inSaque.focus();
    return;
  }

  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;

  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }

  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;

  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  } else {
    resp2.innerText = '';
  }

  const notasDez = Math.floor(resto / 10);

  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`;
  } else {
    resp3.innerText = '';
  }
});
