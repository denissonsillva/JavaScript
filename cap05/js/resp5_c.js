const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let resto = '';
  let soma = 0;
  let divisores = '';

  for (let i = 1; i < numero; i++) {
    resto = numero % i;
    if (resto == 0) {
      divisores = divisores + i + ', ';
      soma += i;
    }
  }

  resp1.innerText = `Divisores de ${numero}: ${divisores} (Soma: ${soma})`;

  if (soma == numero) {
    resp2.innerText = `${numero} é um número Perfeito.`;
  } else {
    resp2.innerText = `${numero} NÃO é um número Perfeito.`;
  }
});
