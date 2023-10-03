function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo = document.getElementById('sexo').value;
    var resultadoElement = document.getElementById('resultado');

    if (!isNaN(altura) && altura > 0) {
        var pesoIdeal;

        if (sexo === 'homem') {
            pesoIdeal = (72.7 * altura) - 58;
        } else if (sexo === 'mulher') {
            pesoIdeal = (62.1 * altura) - 44.7;
        } else {
            resultadoElement.textContent = 'Selecione um sexo válido.';
            return;
        }

        resultadoElement.textContent = 'Peso Ideal: ' + pesoIdeal.toFixed(2) + ' kg';
    } else {
        resultadoElement.textContent = 'Digite uma altura válida.';
    }
}
