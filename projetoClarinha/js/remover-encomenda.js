var encomendas = document.querySelector("table");

encomendas.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 600);
    
});