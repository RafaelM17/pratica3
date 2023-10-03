function calcularPagamento() {
    var preco = parseFloat(document.getElementById('preco').value);
    var condicao = parseInt(document.getElementById('condicao').value);
    var resultadoElement = document.getElementById('resultado');

    if (!isNaN(preco) && preco > 0) {
        var valorFinal;

        switch (condicao) {
            case 1:
                valorFinal = preco * 0.9; // 10% de desconto
                break;
            case 2:
                valorFinal = preco * 0.95; // 5% de desconto
                break;
            case 3:
                valorFinal = preco; // Sem juros em duas vezes
                break;
            case 4:
                valorFinal = preco * 1.06; // Juros de 6% em três vezes
                break;
            default:
                resultadoElement.textContent = 'Escolha uma condição de pagamento válida.';
                return;
        }

        resultadoElement.textContent = 'Valor a ser pago: R$' + valorFinal.toFixed(2);
    } else {
        resultadoElement.textContent = 'Digite um preço válido.';
    }
}
