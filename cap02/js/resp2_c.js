const frm = document.querySelector('form');
const resp1 = document.querySelector('#outProduto');
const resp2 = document.querySelector('#outPreco');

frm.addEventListener('submit', (e) => {
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);
  const promocao = preco * 2.5;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${promocao.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$ ${(preco * 0.5).toFixed(2)}`;
  e.preventDefault();
});
