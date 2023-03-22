var botao = document.querySelector("#add_encomenda");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#Form");
    console.log(form);

    var tbl = document.getElementById("tabela");
    tbl.appendChild(montaTR(obtemEncomenda(form)));
})

function obtemEncomenda(form) {
    var encomenda = {
        nome: form.nome.value,
        produto: form.prod.value,
        qtd: form.qtd.value,
        valor: form.valor.value,
    }
    console.log(encomenda);
    return encomenda;
}

function montaTR(encomenda){
    var linha = document.createElement("tr");

    var nometb = montaTD(encomenda.nome, "nome");
    var produtb = montaTD(encomenda.produto, "prod");;
    var qtdtb = montaTD(encomenda.qtd, "qtd");
    var valortd = montaTD(encomenda.valor, "valor");
    var totaltd = montaTD(0, "total");
    
    linha.appendChild(nometb);
    linha.appendChild(produtb);
    linha.appendChild(qtdtb);
    linha.appendChild(valortd);
    linha.appendChild(totaltd);

    return linha;
}

function montaTD(dados, classe){
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}
//---------------------- EVENTOS ----------------------------
// titulo.addEventListener("click", mensagem);

// //Função nomeada
// function mensagem(){
//     console.log("O titulo foi clicado")
// }

//Função anonima
// titulo.addEventListener("click", function (){
//     console.log("O titulo foi clicado - função anonima");
// })

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