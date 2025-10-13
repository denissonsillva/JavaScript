// cria referencia ao form e ao elemento h3 (onde sera exibida a resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// cria um "ouvinte" de evento acionado quando o botam submit for clicado
frm.addEventListener('submit', (e) => {
  const nome = frm.inNome.value; // obtém o conteúdo do campo inNome
  resp.innerText = `Olá ${nome}`;
  e.preventDefault(); // impede o envio do form
});
