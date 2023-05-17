var btnAdd= document.getElementById("calcular_valor");
var custoTotal = 0;
btnAdd.addEventListener("click", function(){
    var soma = 1;
    
    var insumos = document.querySelectorAll('.insumo');
    
    insumos.forEach(insumo => {
        
        console.log(insumo);
        var quantidade = insumo.querySelector('.qtd').textContent;
        var quantidadeEmbalagem = insumo.querySelector('.qtdEmbalagem').textContent;
        var valor = insumo.querySelector('.val').textContent;
        
        custoTotal = calTotal(parseInt(quantidade), parseInt(quantidadeEmbalagem), parseInt(valor));
        console.log(custoTotal);
        soma += parseFloat(custoTotal);

    });
    console.log(soma);

})

/*function calcularCustos(){
    var quantidade = document.getElementById('quantidade').value;
    var quantidadeEmbalagem = document.getElementById('quantEmba').value;
    var valor = document.getElementById('valor').value;
    var insumos = document.querySelectorAll('.insumo'); 

    for (var i=0; i<insumos.lenght; i++){
        var custoTotal = calTotal(quantidade, quantidadeEmbalagem, valor) + custoTotal;

        console.log("oioi" + custoTotal)
    }

}*/

function validaQuant(qtde, qtdEmba){
    if(!isNaN(qtde) && qtde<=qtdEmba){
        return true;
    }else{
        return false;
    }
}

function calTotal(qtd, qtdEmba, val){
    var total = 0;
    total = (qtd/qtdEmba)*val;
    return total;
}