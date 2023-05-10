function calcularCustos(){
    var nomeProduto = document.getElementById('nome-produto').value;
    var quantidade = parseFloat(document.getElementById('quantidade').value);
    var quantidadeEmbalagem = parseFloat(document.getElementById('quantidade-embalagem').value);
}

function validarQtd(quantidade, quantidadeEmbalagem){
    if(!isNaN(quantidade)&&quantidade<=quantidadeEmbalagem){
        return true;
    }else{
        return false;
    }
}