function dataEHora() {
    var datahoraAtual = new Date();
    var data = datahoraAtual.toLocaleDateString();
    var hora = datahoraAtual.toLocaleTimeString();

    var mensagem = "Data: " + data + "<br>Hora: " + hora;

    document.getElementById('dataEHora').innerHTML = mensagem;
}