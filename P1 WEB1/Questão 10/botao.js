const botao = document.getElementById('btn');
const container = document.getElementById('aqui');

botao.addEventListener('click', function() {
  const inputTexto = document.createElement('input');
  inputTexto.type = 'text';
  container.appendChild(inputTexto);
});