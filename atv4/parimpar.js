function verificarParOuImpar() {
    var numero = document.getElementById('numero').value;
    var resultadoElement = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultadoElement.textContent = 'O número é par.';
    } else {
        resultadoElement.textContent = 'O número é ímpar.';
    }
}











