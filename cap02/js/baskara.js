const frm = document.querySelector('form');
const raiz1 = document.querySelector('h3');
const raiz2 = document.querySelector('h4');
frm.addEventListener('submit', (e) => {
  const a = Number(frm.inA.value);
  const b = Number(frm.inB.value);
  const c = Number(frm.inC.value);
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    raiz1.innerText = 'Não existem raízes reais';
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    raiz1.innerText = `Raiz 1: ${x1.toFixed(2)}`;
    raiz2.innerText = `Raiz 2: ${x2.toFixed(2)}`;
  }
  e.preventDefault();
});
