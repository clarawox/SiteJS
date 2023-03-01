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
    //Captura a quantidade encomendada
    var qtd = clientes[i].querySelector(".qtd").textContent
    //console.log(qtd)

    //Captura o valor unitário
    var val = clientes[i].querySelector(".valor").textContent
    //console.log(val)

    //Pega o nome
    var nome = clientes[i].querySelector(".nome").textContent
    //Verifica se a quantidade recebida é válida
    if(isNaN(val)&&isNaN(qtd)){
        //altera a cor da fonte da linha inteira para vermelho
        clientes[i].style.color="darkred"
        //altera a cor do fundo da linha inteira para vermelho
        clientes[i].style.backgroundColor="lightcoral"
        clientes[i].querySelector(".qtd").textContent = "Quantidade inválida";
        clientes[i].querySelector(".valor").textContent = "Valor  inválido";
        console.log("O valor e a quantidade inseridos pelo(a) cliente "+nome+" são inválidos")
    }
    else{
        if(isNaN(val)){
            clientes[i].querySelector(".valor").textContent = "Valor  inválido";
            //muda apenas a cor da fonte do valor
            clientes[i].querySelector(".valor").style.color="red"
            console.log("O valor inserido pelo(a) cliente "+nome+" é inválido")
        }

        else if (isNaN(qtd)){
            clientes[i].querySelector(".qtd").textContent = "Quantidade inválida";
            //muda apenas a cor do fundo da quantidade
            clientes[i].querySelector(".qtd").style.backgroundColor="lightcoral"
            console.log("A quantidade inserida pela cliente "+nome+" é inválida")
        }
        else{
         //Calcula o valor total
        var valTotal = qtd*val
        //console.log(valTotal)
        clientes[i].querySelector(".valor").textContent = parseFloat(val).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
        clientes[i].querySelector(".total").textContent = valTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
        }
    }
}

