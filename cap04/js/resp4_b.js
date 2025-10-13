const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const permitida = Number(frm.inPermitida.value);
  const condutor = Number(frm.inCondutor.value);

  if (condutor < permitida * 1.2) {
    resp.innerText = `Multa leve`;
  } else if (condutor >= permitida * 1.2 && condutor < permitida * 1.5) {
    resp.innerText = `Multa média`;
  } else {
    resp.innerText = `Multa grave`;
  }
});
