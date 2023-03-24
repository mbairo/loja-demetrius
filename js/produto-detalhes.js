let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/loja-demetrius/json/produtos.json', true);
http.send();
http.onload = function () {
    // 4: pedido finalizado e resposta pronta // 200: "OK"
    if (this.readyState == 4 && this.status == 200) {
        // Função PARSE para converter as StringsJson em um array javascript.
        let produtosJson = JSON.parse(this.responseText);
        // Variavel vazia para armazenar os layouts/cards
        let constroiCard = "";

        for (var i = 0; i < produtosJson.length; i++) {
            const url = new URLSearchParams(window.location.search);
            const id = url.get("id");

            if (produtosJson[i].id == id) {
                // window.alert("Deu certo: " + produtosJson[i].preco);

                constroiCard += `
                <div>
                <div class="card" style="width: 36rem;">
                        <img class="card-img-top" src="${produtosJson[i].img}">
                        <p class="cardTitle">${produtosJson[i].nome}</p>
                        <p class="cardText">${produtosJson[i].descricao}</p>
                        <p>${produtosJson[i].preco}</p>                    
                        <a href="// TODO: link para o carrinho" class="btn btn-primary id="cardTitlex" target="_blank">Adicionar ao Carrinho</a>                       		
                    </div>    
                </div>   
			`;
            }
        }
        document.querySelector("#produto-selecionado").innerHTML = constroiCard;
        console.log("Aeeeeeee: ", constroiCard);
    }
} 
