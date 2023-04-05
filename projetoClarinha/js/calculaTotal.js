
var clientes = document.querySelectorAll(".cliente");
for (var i = 0; i < clientes.length; i++) {

    var qtd = clientes[i].querySelector(".qtd").textContent;

    var val = clientes[i].querySelector(".valor").textContent;

    var nome = clientes[i].querySelector(".nome").textContent;

    if (validaVal(val) && validaQtde(qtd)) {
        clientes[i].querySelector(".valor").textContent = formataValor(val);
        clientes[i].querySelector(".total").textContent = formataValor(CalTotal(qtd,val));
    }
    else if (!validaVal(val) && !validaQtde(qtd)) {
        clientes[i].querySelector(".valor").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".total").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".qtd").textContent = "Valor e quantidade inválidos";
        clientes[i].classList.add("Invalid");
    }
    else {
        if (!validaVal(val)) {
            clientes[i].querySelector(".valor").textContent = "Valor inválido";
            clientes[i].querySelector(".total").textContent = "Valor inválido";
            clientes[i].classList.add("Invalid");
        }

        else if (!validaQtde(qtd)) {
            clientes[i].querySelector(".qtd").textContent = "Quantidade inválida";
            clientes[i].querySelector(".total").textContent = "Quantidade inválida";
            clientes[i].classList.add("Invalid");
        }
    }
}

function formataValor(valor){
    var valorFor = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFor;
}

function CalTotal(qtd, valor){
    var total = 0;
    total = qtd*valor;
    return total;
}

function validaQtde(qtde){
    if(!isNaN(qtde) && qtde>0){
        return true;
    }else{
        return false;
    }
}

function validaVal(valor){
    if(!isNaN(valor) && (valor>0)){
        return true;
    }else{
        return false;
    }
}

function validaNome(nome){
    if(nome=="" || (!isNaN(nome))){
        return false;
    }else{
        return true;
    }
}