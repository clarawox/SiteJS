var insumos = document.querySelectorAll(".insumo")

for(var i=0; i<insumos.length; i++){

    var quantidade = insumos[i].querySelector(".qtd").textContent;

    var quantidadeEmba = insumos[i].querySelector(".qtdEmbalagem").textContent;

    var valor = insumos[i].querySelector(".val").textContent;

    if (!isNaN(valor) && !isNaN(quantidade)) {
        //Calcula o valor total
        var valTotal = quantidade * valor;
        //console.log(valTotal)
        insumos[i].querySelector(".val").textContent = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        insumos[i].querySelector(".total").textContent = valTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}



var botao = document.querySelector("#add_insumo");

botao.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#FormInsumo");
    var insumo = obtemInsumo(form);
    //var validacao = validaInsumo(insumo);
    
    /*if (validacao.length > 0) {
        exibeErros(validacao);
        return;
    }*/

    addInsumoNaTabela(insumo);
    form.reset();
    document.getElementById("erro").innerHTML = "";
})

function addInsumoNaTabela(insumo){
    var insumoTr = montaLinha(insumo);
    var tabela = document.querySelector("#dados");
    tabela.appendChild(insumoTr);
}

function obtemInsumo(form){
    var insumo = {
        insu: form.insumo.value,
        quantidade: form.quantidade.value,
        qtdEmba: form.quantEmba.value,
        valor: form.valor.value,
    }
    return insumo;
}

function montaLinha(insumo){
    var linha = document.createElement("tr");
    linha.classList.add('insumo');

    linha.appendChild(montaColuna(insumo.insu, "nomeInsumo"));
    linha.appendChild(montaColuna(insumo.quantidade, "qtd"));
    linha.appendChild(montaColuna(insumo.qtdEmba, "qtdEmbalagem"));
    linha.appendChild(montaColuna(formatar(insumo.valor, "val")));
    linha.appendChild(montaColuna(formatar(calCusto(insumo.quantidade, insumo.qtdEmba, insumo.valor))))
    return linha;
}

function montaColuna(dados, classe){
    var coluna = document.createElement("td");

    coluna.textContent = dados;
    coluna.classList.add(classe);

    return coluna;
}

function validaInsumo(insumo){
    var errosInsu = [];

    if(!validaQuant(insumo.quantidade, insumo.qtdEmba)){
        errosInsu.push("Quantidade inválida, por favor insira um número maior do que zero e menor que a quantidade na embalagem");
    }
    console.log(insumo.quantidade);
    console.log(insumo.qtdEmba);
    return errosInsu;
}

function exibeErros(erros){
    var ul = document.querySelector("#erro");

    erros.forEach(function (erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        ul.classList.add("error")
    })
}

function calCusto(qtd, qtdEmba, val){
    let total = (qtd/qtdEmba)*val;
    return total;
}

function formatar(valor){
    var valorFor = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFor;
}