let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/loja-demetrius/json/produtos.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let produtosJson = JSON.parse(this.responseText);
        let constroiCard = "";

        for(let item of produtosJson){   
            constroiCard += `
            <img src="${item.img}">
            <p>${item.nome}</p>
            <p>${item.descricao}</p>
            <p>${item.preco}</p>                    
            <a href="// TODO: link para o carrinho" class="btn btn-primary id="cardTitlex" target="_blank">Comprar</a>                       		
        `;
        }
        
        document.querySelector("#produtos").innerHTML = constroiCard;
        console.log("Aeeeeeee: ", constroiCard);
    }
} 
