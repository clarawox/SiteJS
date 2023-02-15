var titulo = document.querySelector(".titulo")
titulo.innerHTML = '<img src="../img/emoji.png"> Lista de Encomendas';

//ROTINA DE CALCULO DO VALOR TOTAL
//captura os dados do cliente
// var cliente = document.querySelector(".cliente");

// //Calcula a quantidade
// var qtde = cliente.querySelector(".qtd").textContent;
// //console.log(qtde)

// var val = cliente.querySelector(".valor").textContent;
// //console.log(val)

// var valTotal = qtde*val;
// //console.log(valTotal);

// console.log(cliente.querySelector(".total").textContent)
// cliente.querySelector(".total").textContent = valTotal

// //-------------------------------------------------------------
// var cliente2 = document.querySelector(".cliente2");

// //Calcula a quantidade
// var qtde2 = cliente2.querySelector(".qtd2").textContent;
// //console.log(qtde)

// var val2 = cliente2.querySelector(".valor2").textContent;
// //console.log(val)

// var valTotal2 = qtde2*val2;
// //console.log(valTotal);

// console.log(cliente2.querySelector(".total2").textContent)
// cliente2.querySelector(".total2").textContent = valTotal2

// //-------------------------------------------------------------
// var cliente3 = document.querySelector(".cliente3");

// //Calcula a quantidade
// var qtde3 = cliente3.querySelector(".qtd3").textContent;
// //console.log(qtde)

// var val3 = cliente3.querySelector(".valor3").textContent;
// //console.log(val)

// var valTotal3 = qtde3*val3;
// //console.log(valTotal);

// console.log(cliente3.querySelector(".total3").textContent)
// //manda os dados para o campo necessário na tabela
// cliente3.querySelector(".total3").textContent = valTotal3

//-----------------------------------------------------------------
var clientes = document.querySelectorAll(".cliente");
console.log(clientes);
console.log(clientes.length); //conta a quantidade de linhas na array




for(var i=0; i < clientes.length; i++){
    var qtd = clientes[i].querySelector(".qtd").textContent
    //console.log(qtd)
    var val = parseFloat(clientes[i].querySelector(".valor").textContent)
    //console.log(val)
    var valTotal = qtd*val
    console.log(valTotal)
    
    clientes[i].querySelector(".valor").textContent = val.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    clientes[i].querySelector(".total").textContent = valTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}
