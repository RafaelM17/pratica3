function mostrarOrdemDecrescente() {
   
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    var valor3 = parseInt(document.getElementById('valor3').value);


    if (valor1 !== valor2 && valor2 !== valor3 && valor1 !== valor3) {
 
        var valores = [valor1, valor2, valor3];
        valores.sort(function(a, b) {
            return b - a;
        });

     
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Valores em ordem decrescente: ' + valores.join(', ');
    } else {

        var resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Por favor, insira três valores diferentes.';
    }
}
