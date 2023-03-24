let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/loja-demetrius/json/produtos.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let produtosJson = JSON.parse(this.responseText);
        let constroiCard = "";

        for (let item of produtosJson) {
            constroiCard += `
            <div>
            <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${item.img}">
                    <div class="card-body">
                    <p class="cardTitle">${item.nome}</p>
                    <p class="cardText">${item.descricao}</p>
                    <p>${item.preco}</p>  
                    </div>                  
                    <a href="// TODO: link para o carrinho" class="btn btn-primary id="cardTitlex" target="_blank">Comprar</a>                       		
                </div>    
            </div>   
        `;
        }

        document.querySelector("#produtos").innerHTML = constroiCard;
        console.log("Aeeeeeee: ", constroiCard);
    }
} 
