var insumos = document.querySelectorAll(".insumo")

for(var i=0; i<insumos.length; i++){
    var insu = insumos[i].querySelector(".insumo").textContent;

    var quantidade = insumos[i].querySelector(".quantidade").textContent;

    var quantidadeEmba = insumos[i].querySelector(".quantEmba").textContent;

    var valor = insumos[i].querySelector(".valor").textContent;
}

var botao = document.querySelector("#add_insumo");

botao.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#FormInsumo");

    var insumo = obtemInsumo(form);

    var validacao = validaInsumo(insumo);
    
    if (validacao.length > 0) {
        exibeMensagemErro(validacao);
        return;
    }

    addInsumoNaTabela(encomenda);

    form.reset();

    document.getElementById("erro").innerHTML = "";
})

function obtemInsumo(form){
    var insumo = {
        insu: form.insumo.value,
        quantidade: form.quantidade.value,
        qtdEmba: form.quatEmba.value,
        valor: form.valor.value,
    }
    return insumo;
}

function montaLinha(insumo){
    var linha = document.createElement("tr");

    linha.appendChild(montaColuna(insumo.insu, "insumo"));
    linha.appendChild(montaColuna(insumo.quantidade, "qtd"));
    linha.appendChild(montaColuna(insumo.qtdEmba, "qtdEmba"));
    linha.appendChild(montaColuna(formataValor(insumo.valor, "valor")));

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

    if(!validaQuant(insumo.quantidade)){
        errosInsu.push("Quantidade inválida, por favor insira um número maior do que zero e menor que a quantidade na embalagem");
    }

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