const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  const parImpar = numero % 2;

  if (parImpar == 0) {
    resp.innerText = `O número ${numero} é PAR.`;
  } else {
    resp.innerText = `O número ${numero} é ÍMPAR.`;
  }
});
