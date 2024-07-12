function transferencia() {
    const texto= document.getElementById('meuTexto').value;
    const select= document.getElementById('meuSelect');

    const option= document.createElement('option');
    option.value= texto;
    option.text= texto;

    select.appendChild(option);
}