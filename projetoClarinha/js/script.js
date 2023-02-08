var titulo = document.querySelector(".titulo")
titulo.innerHTML = '<img src="../img/emoji.png"> Lista de Encomendas';

//ROTINA DE CALCULO DO VALOR TOTAL
//captura os dados do cliente
var cliente = document.querySelector(".cliente");

//Calcula a quantidade
var qtde = cliente.querySelector(".qtd").textContent;
console.log(qtde)

var val = cliente.querySelector(".valor").textContent;
console.log(val)

var valTotal = qtde*val;
console.log(valTotal);