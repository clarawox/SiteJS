var botao = document.querySelector("#add_encomenda");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#Form");

    var validacao = validaEncomenda(obtemEncomenda(form));

    document.getElementById("mensagem-erro").innerHTML = "";

    if (validacao.length > 0) {
        exibeMensagemErro(validacao);
        return;
    }

    var tbl = document.getElementById("tabela");
    tbl.appendChild(montaTR(obtemEncomenda(form)));

    form.reset();
})

function obtemEncomenda(form) {
    var encomenda = {
        nome: form.nome.value,
        produto: form.prod.value,
        qtd: form.qtd.value,
        valor: form.valor.value,
    }
    return encomenda;
}

function montaTR(encomenda) {
    var linha = document.createElement("tr");

    linha.appendChild(montaTD(encomenda.nome, "nome"));
    linha.appendChild(montaTD(encomenda.produto, "prod"));
    linha.appendChild(montaTD(encomenda.qtd, "qtd"));
    linha.appendChild(montaTD(formataValor(encomenda.valor, "valor")));
    linha.appendChild(montaTD(formataValor(CalTotal(encomenda.qtd, encomenda.valor), "total")));

    return linha;

}

function montaTD(dados, classe) {
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}

function validaEncomenda(encomenda) {
    var erros = [];

    if (!validaQtde(encomenda.qtd)) {
        erros.push("Quantidade inválida, por favor insira um número maior do que zero :)");
    }

    if (!validaVal(encomenda.valor)) {
        erros.push("Valor unitário inválido, por favor insira um número maior do que zero :)");
    }

    if (!validaNome(encomenda.nome)) {
        erros.push("Por favor digite seu nome...");
    }

    return erros;
}

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagem-erro");

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        ul.classList.add("error");
    })
}