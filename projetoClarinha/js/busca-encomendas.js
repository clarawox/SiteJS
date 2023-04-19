var botaoAdd= document.querySelector("#buscar_encomendas");

botaoAdd.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);

        encomendas.forEach(function(encomenda) {
            //encomenda.total = calculaTotal(encomenda.qtd, encomenda.valor);
            addEncomendaNaTabela(encomenda);
        });
    });
    xhr.send();
})