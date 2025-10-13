const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  // Removidos ladosAB, ladosAC, ladosBC pois não são usados

  let tipo;

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    resp1.innerText = `Os lados ${ladoA}, ${ladoB} e ${ladoC} formam um triângulo.`;
    if (ladoA == ladoB && ladoB == ladoC) {
      resp2.innerText = `Tipo: equilátero.`;
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      resp2.innerText = `Tipo: isósceles.`;
    } else {
      resp2.innerText = `Tipo: escaleno.`;
    }
  } else {
    resp1.innerText = `Os lados ${ladoA}, ${ladoB} e ${ladoC} NÃO formam um triângulo.`;
    resp2.innerText = '';
  }
});
