function mostrarHora() {
    var dataHoraAtual = new Date();
    var hora = dataHoraAtual.toLocaleTimeString();
    document.getElementById('hora').innerHTML = hora;
}

function exibirAlerta() {
    alert("Você clicou no link!");
}