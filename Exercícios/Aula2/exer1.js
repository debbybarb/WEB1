function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;
    var modulo = numero1 % numero2;

    document.getElementById('resultadoSoma').innerHTML = "Soma: " + soma;
    document.getElementById('resultadoSubtracao').innerHTML = "Subtração: " + subtracao;
    document.getElementById('resultadoMultiplicacao').innerHTML = "Multiplicação: " + multiplicacao;
    document.getElementById('resultadoDivisao').innerHTML = "Divisão: " + divisao;
    document.getElementById('resultadoModulo').innerHTML = "Módulo: " + modulo;
}