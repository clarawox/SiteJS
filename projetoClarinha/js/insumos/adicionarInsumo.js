var insumos = document.querySelectorAll(".insumo").textContent;

var btnCal = document.getElementById("calcular_valor");
var btnAdd = document.querySelector("#add_insumo");

let soma = 0;

var total = 0;

var array = new Array();

const div1 = document.getElementById("totalProd");
const div2 = document.getElementById("totalLuc");

btnCal.addEventListener("click", function () {
    var valTotal = document.getElementById("valTotal");
    valTotal.textContent = formatar(soma);
    var lucro = document.getElementById("lucro").value;
    lucro = lucro / 100;
    var vallucro = (soma * lucro) + soma;
    var lucroTotal = document.getElementById("valLucro");
    lucroTotal.textContent = formatar(vallucro);
})

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#FormInsumo");
    var insumo = obtemInsumo(form);
    var quantidade = parseFloat(insumo.quantidade);
    var qtdEmba = parseFloat(insumo.qtdEmba);
    var valor = parseFloat(insumo.valor);
    //var validacao = validaInsumo(insumo);

    /*if (validacao.length > 0) {
        exibeErros(validacao);
        return;
    }*/
    soma += (quantidade / qtdEmba) * valor;
    addInsumoNaTabela(insumo);

    form.reset();
    document.getElementById("erro").innerHTML = "";
})

function toggleDiv() {
    var div1 = document.getElementById("totalProd");
    var div2 = document.getElementById("totalLuc");

    if (div1.style.display === "none") {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }

    if (div2.style.display === "none") {
        div2.style.display = "block";
    } else {
        div2.style.display = "none";
    }
}

function exportarExcel() {
    var produto = document.getElementById("produ").value;
    var lucro = document.getElementById("lucro").value;
    var valTotal = document.querySelector("#valTotal").textContent;
    var lucroTotal = document.querySelector("#valLucro").textContent;
    var dado = [produto, lucro, valTotal, lucroTotal];

    // var table = document.getElementById('tabelaInsumo');  // Seleciona a tabela

    // var data = [];  // Array que armazenará os dados da tabela

    // // Percorre as linhas da tabela
    // for (var i = 2; i < table.rows.length; i++) {
    //     var row = table.rows[i];
    //     var rowData = [];

    //     // Percorre as células da linha atual
    //     for (var j = 0; j < row.cells.length; j++) {
    //         var cell = row.cells[j];
    //         rowData.push(cell.textContent);
    //     }

    //     // Adiciona a linha de dados ao array principal
        // data.push(array);
    

    // console.log(data);
    array.push(dado);
    exportToExcel(array);
}


function addInsumoNaTabela(insumo) {
    var insumoTr = montaLinha(insumo);
    var tabela = document.querySelector("#dados");
    tabela.appendChild(insumoTr);
}

function obtemInsumo(form) {
    var insumo = {
        insu: form.insumo.value,
        quantidade: form.quantidade.value,
        qtdEmba: form.quantEmba.value,
        valor: form.valor.value,
    }
    return insumo;
}

function montaLinha(insumo) {
    var linha = document.createElement("tr");
    var calculo = calCusto(insumo.quantidade, insumo.qtdEmba, insumo.valor);
    linha.classList.add("insumo");

    linha.appendChild(montaColuna(insumo.insu, "nomeInsumo"));
    linha.appendChild(montaColuna(insumo.quantidade, "qtd"));
    linha.appendChild(montaColuna(insumo.qtdEmba, "qtdEmbalagem"));
    linha.appendChild(montaColuna(formatar(insumo.valor, "val")));
    linha.appendChild(montaColuna(formatar(calculo)));

    var insumo = [insumo.insu, insumo.quantidade, insumo.qtdEmba, insumo.valor, calculo];
    array.push(insumo);
    console.log(array);
    return linha;
}

function montaColuna(dados, classe) {
    var coluna = document.createElement("td");

    coluna.textContent = dados;
    coluna.classList.add(classe);

    return coluna;
}

function validaInsumo(insumo) {
    var errosInsu = [];

    if (!validaQuant(insumo.quantidade, insumo.qtdEmba)) {
        errosInsu.push("Quantidade inválida, por favor insira um número maior do que zero e menor que a quantidade na embalagem");
    }
    console.log(insumo.quantidade);
    console.log(insumo.qtdEmba);
    return errosInsu;
}

function exibeErros(erros) {
    var ul = document.querySelector("#erro");

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        ul.classList.add("error")
    })
}

function calCusto(qtd, qtdEmba, val) {
    let total = (qtd / qtdEmba) * val;
    return total;
}

function formatar(valor) {
    var valorFor = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFor;
}

function validaQuant(qtde, qtdEmba) {
    if (!isNaN(qtde) && qtde <= qtdEmba) {
        return true;
    } else {
        return false;
    }
}

function calTotal(qtd, qtdEmba, valor) {
    var total = 0;
    total = (qtd / qtdEmba) * valor;
    return total;
}