
var clientes = document.querySelectorAll(".cliente");
for (var i = 0; i < clientes.length; i++) {

    var qtd = clientes[i].querySelector(".qtd").textContent;

    var val = clientes[i].querySelector(".valor").textContent;

    var nome = clientes[i].querySelector(".nome").textContent;


    if (!isNaN(val) && !isNaN(qtd)) {

        var valTotal = qtd * val;

        clientes[i].querySelector(".valor").textContent = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        clientes[i].querySelector(".total").textContent = valTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    else if (!isNaN(val) && !isNaN(qtd)) {
        clientes[i].querySelector(".valor").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".total").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".qtd").textContent = "Valor e quantidade inválidos";
        clientes[i].classList.add("Invalid");

    }
    else {
        if (isNaN(val)) {
            clientes[i].querySelector(".valor").textContent = "Valor inválido";
            clientes[i].querySelector(".total").textContent = "Valor inválido";
            clientes[i].querySelector(".qtd").textContent = "Valor inválido";
            clientes[i].classList.add("Invalid");
        }

        else if (isNaN(qtd)) {
            clientes[i].querySelector(".qtd").textContent = "Quantidade inválida";
            clientes[i].querySelector(".valor").textContent = "Quantidade inválida";
            clientes[i].querySelector(".total").textContent = "Quantidade inválida";
            clientes[i].classList.add("Invalid");
        }

    }
}