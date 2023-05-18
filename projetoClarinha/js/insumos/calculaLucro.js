var btnAdd= document.getElementById("calcular_valor"); 

btnAdd.addEventListener("click", function(){
    
    var insumos = document.querySelectorAll('.insumo');
    
    insumos.forEach(insumo => {
        
        console.log(insumo);        
        var quantidade = parseFloat(insumo.querySelector('.qtd').textContent);
        var quantidadeEmbalagem = parseFloat(insumo.querySelector('.qtdEmbalagem').textContent);
        var valor = parseFloat(insumo.querySelector('.val').textContent);

        var custoTotal = calTotal(quantidade, quantidadeEmbalagem, valor);
        console.log(custoTotal);
        
        
    });

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

