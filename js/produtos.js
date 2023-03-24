let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/loja-demetrius/json/produtos.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let produtosJson = JSON.parse(this.responseText);
        let constroiCard = "";

        for (let item of produtosJson) {
            constroiCard += `
            <div class="row">
                <div class="col-sm-6">                
                    <div class="card"  style="width: 18rem;  ">                                    
                        <div class="card-body">                         
                            <img class="card-img-top" src="${item.img}">
                            <div class="card-body">                                                                                            
                                <p>${item.preco}</p>                                  
                            </div>                                                                  
                        </div>                                     
                        <a class="btn btn-primary ver-mais" target="_blank">${item.id}</a>                       		                                         
                    </div>             
                </div>                          
            </div> 
        `;
        }

        document.querySelector("#produtos").innerHTML = constroiCard;
    }

    
    document.querySelectorAll(".ver-mais").forEach( function(produtoClicado) {    
        produtoClicado.addEventListener("click", function(evento) {
        
        const elementoClicado = evento.target;
        
        $(function(){
            var valorDoId = $(elementoClicado).text();    
            console.log("Valor do Id JQuery: " + valorDoId);

            window.open('/html/produto-detalhes.html?id=' + valorDoId) 
        });


        
      });
    });
    


    
} 




// Cópia
// for (let item of produtosJson) {
//     constroiCard += `
//     <div class="row">
//         <div class="col-sm-6">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <img class="card-img-top" src="${item.img}">
//                     <div class="card-body">
//                         <p class="cardTitle">${item.nome}</p>
                        
//                         <p>${item.preco}</p>                                  
//                     </div>                  
//                     <a href="// TODO: link para o carrinho" class="btn btn-primary id="cardTitlex" target="_blank">Comprar</a>                       		
//                 </div>                                          
//             </div>             
//         </div>                  
//     </div> 
// `;
// }