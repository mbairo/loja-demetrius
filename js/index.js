document.querySelectorAll(".ver-mais").forEach( function(produtoClicado) {    
    produtoClicado.addEventListener("click", function(evento) {
    const elementoClicado = evento.target;
    const id = elementoClicado.id;
    // window.alert("Id clicado: " + id);      
    window.open('/html/produto-detalhes.html?id=' + id) 
  });
});
