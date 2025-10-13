// cria a referencia ao form e aos elemetos h3 e h4
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// cria um ouvinte de evento, acionado quando o form for submetido
frm.addEventListener('submit', (e) => {
  const titulo = frm.inTitulo.value; // obtém o valor do campo inTitulo
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  resp1.innerText = titulo;
  resp2.innerText = `${horas} horas e ${minutos} minutos`;

  e.preventDefault();
});
