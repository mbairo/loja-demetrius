document.querySelectorAll(".ver-mais").forEach( function(produtoClicado) {    
    produtoClicado.addEventListener("click", function(evento) {
    const elementoClicado = evento.target;
    const id = elementoClicado.id;
    // window.alert("Id clicado: " + id);      
    window.open('/html/produto-detalhes.html?id=' + id) 
  });
});


  //  $(function(){
  //     $("#iframe-wrapper").load("iframe-content.html", function() {
  //        $("#iframe-wrapper").append('<footer><section><div id="containerFooter"><div id="webFooter"><h3> online store </h3><p> men clothing </p><p> women clothing </p><p> men accessories </p><p> women accessories </p></div><div id="webFooter"><h3> helpful link </h3><p> home </p><p> about </p><p> contact </p></div><div id="webFooter"><h3> partners </h3><p> zara </p><p> pantaloons </p><p> levis </p><p> ucb </p><p> + many more </p></div><div id="webFooter"><h3> address </h3><p> building 101 </p><p> central avenue </p><p> la - 902722 </p><p> united states </p></div></div></section><a href="https://api.whatsapp.com/send/?phone=5541998775437&text&app_absent=0" class="float" target="_blank"><iclass="fa fa-whatsapp my-float"></i></a></footer>');
  //     });
  //  });


//   <script>
//    $(function(){
//       $("#iframe-wrapper").load("iframe-content.html", function() {
//          $("#iframe-wrapper").append('<footer><!-- whatsApp --> <p>&copy;ADB CNPJ: 87486746518468 &middot; <a href="#">Contato</a> &middot; <a href="#">Quem somos</a></p><a href="https://api.whatsapp.com/send/?phone=5541998775437&text&app_absent=0" class="float" target="_blank"><i    class="fa fa-whatsapp my-float"></i></a><p class="float-right btn" id="btn-topo"><a href="#">Voltar ao topo</a></p></footer>');})});
// </script>